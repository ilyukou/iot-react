import React, { Component } from 'react';
import axios from 'axios';
class Sensor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sensorId : this.props.value,
            sensor : {},

            isLoading : true
        }
    }

    async getProjects(){
      
        await axios.get("http://localhost:8080/sensor/" + this.state.sensorId)
        .then(res => {
  
          this.setState({sensor : res.data});
          this.setState({isLoading : false});
            
        }).catch(error => {
          console.log(error);
        });
      }

    componentDidMount(){
        this.getProjects();
    }

    render() { 
        if(this.state.isLoading){
            return <p>Loading..</p>
        }
        

        return <div>
            <p>
                <strong>{this.state.sensor.name}</strong>
            </p>
            <p>
                <strong>{this.state.sensor.token}</strong>
            </p>
            
        </div>
    }
}
 
export default Sensor;