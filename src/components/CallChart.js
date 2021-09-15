import React, { Component } from 'react';
import Chart from "./Chart";

class CallChart extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(79, 129, 189, 1.0)',
              'rgba(192, 80, 77, 1.0)',
              'rgba(155, 187, 89, 1.0)',
              'rgba(128, 100, 162, 1.0)',
              'rgba(75, 172, 198, 1.0)',
              'rgba(171, 102, 46, 1.0)',
              'rgba(106, 129, 59, 1.0)',
              'rgba(110, 85, 139, 1.0)',
              'rgba(49, 118, 137, 1.0)',
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="CallChart">
        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default CallChart;