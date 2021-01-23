import {host,project,value,sensor} from '../res/properties.json';

export const api = host;

export const projectApiUrl = host + project.prefix;
export const getAllProjectApiUrl = projectApiUrl + project.methods.getAll;


export const sensorApiUrl = host + sensor.prefix;


export const valueApiUrl = host + value.prefix;
export const getByPeriodValueApiUrl = valueApiUrl + value.methods.getByPeriod;