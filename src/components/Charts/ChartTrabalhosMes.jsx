import React, { Component } from 'react';
import BarChartY from "./BarChartY";

class ChartTrabalhosMes extends Component {
  constructor(){
    super();
    this.state = ({ chartData:{} })
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['01/2021', '02/2021', '03/2021', '04/2021', '05/2021', '06/2021', '07/2021', '08/2021', '09/2021'],
        datasets:[
          {
            label:'Fainas',
            data:[
              26,
              27,
              25,
              22,
              20,
              26,
              20,
              22,
              28,
            ],
            backgroundColor:[
              'rgba(75, 172, 198, 1.0)'
            ]
          }
        ]
      }
    });
  }


  render() {
    return (
      <div className="border-2 p-1 mb-1 text-center">
        <span className="border p-1">Trabalhos por Mês</span>
        <BarChartY chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default ChartTrabalhosMes;