import React from "react";
import { TimeSeries } from "pondjs";

import {ChartContainer, ChartRow, Charts, 
    YAxis, LineChart, Baseline, Resizable} from 'react-timeseries-charts';

export default function ReactChart(props){

    const series = new TimeSeries({
        name: "Chart of values",
        columns: ["time", "value"],
        points : props.points
    });
    
    const style = {
        value: {
            stroke: "#a02c2c",
            opacity: 0.2
        }
    };
    
    const baselineStyle = {
        line: {
            stroke: "steelblue",
            strokeWidth: 1,
            opacity: 0.4,
            strokeDasharray: "none"
        },
        label: {
            fill: "steelblue"
        }
    };
    
    const baselineStyleLite = {
        line: {
            stroke: "steelblue",
            strokeWidth: 1,
            opacity: 0.5
        },
        label: {
            fill: "steelblue"
        }
    };
    
    const baselineStyleExtraLite = {
        line: {
            stroke: "steelblue",
            strokeWidth: 1,
            opacity: 0.2,
            strokeDasharray: "1,1"
        },
        label: {
            fill: "steelblue"
        }
    };

    return (
        <Resizable>
            <ChartContainer
                title="Values for sensor ID"
                titleStyle={{ fill: "#555", fontWeight: 500 }}
                timeRange={series.range()}
                format="%H:%M %b '%y"
                timeAxisTickCount={5}
            >
                <ChartRow height="250">
                    <YAxis
                        id="value"
                        label="Values"
                        min={series.min()}
                        max={series.max()}
                        width="60"
                        format=",.2f"
                    />
                    <Charts>
                        <LineChart axis="value" series={series} style={style} />
                        <Baseline
                            axis="value"
                            style={baselineStyleLite}
                            value={series.max()}
                            label="Max"
                            position="right"
                        />
                        <Baseline
                            axis="value"
                            style={baselineStyleLite}
                            value={series.min()}
                            label="Min"
                            position="right"
                        />
                        <Baseline
                            axis="value"
                            style={baselineStyleExtraLite}
                            value={series.avg() - series.stdev()}
                        />
                        <Baseline
                            axis="value"
                            style={baselineStyleExtraLite}
                            value={series.avg() + series.stdev()}
                        />
                        <Baseline
                            axis="value"
                            style={baselineStyle}
                            value={series.avg()}
                            label="Avg"
                            position="right"
                        />
                    </Charts>
                </ChartRow>
            </ChartContainer>
        </Resizable>
    );
}