import React, { Component } from 'react';
import BarChartY from "./BarChartY";

class ChartTopFainas extends Component {
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
        labels: ['Esperance Bay 29/08-D', 'African Pheasant 26/08-D', 'Nordtajo 30/08-C', 'Medan Express 31/08-B', 'Cape Artemisio 29/08-A', 'Marina K 01/09-A', 'Esperance Bay 27/08-C', 'Esperance Bay 01/09-D', 'Yasa Jupiter 28/08-B', 'MSC Coruna 02/09-C'],
        datasets:[
          {
            label:'Fainas',
            data:[
              768.44,
              661.58,
              653.04,
              653.04,
              582.52,
              344.74,
              339.19,
              297.45,
              267.71,
              152.38,
            ],
            backgroundColor:[
              'rgba(79, 129, 189, 1.0)'
            ]
          }
        ]
      }
    });
  }


  render() {
    return (
      <div className="border-2 p-1 mb-1 text-center">
        <span className="border p-1">Top Fainas</span>
        <BarChartY chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default ChartTopFainas;