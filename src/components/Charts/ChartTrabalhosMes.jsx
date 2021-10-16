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
        labels: [''],
        datasets:[
          {
            label: '01/21',
            data:[
              26
            ],
            backgroundColor:[
                'rgba(79, 129, 189, 1.0)',
            ]
          },
          {
            label: '02/21',
            data:[
              27
            ],
            backgroundColor:[
                'rgba(192, 80, 77, 1.0)'
            ]
          },
          {
            label: '03/21',
            data:[
              25
            ],
            backgroundColor:[
                'rgba(155, 187, 89, 1.0)'
            ]
          },
          {
            label: '04/21',
            data:[
              22
            ],
            backgroundColor:[
                'rgba(128, 100, 162, 1.0)'
            ]
          },
          {
            label: '05/21',
            data:[
              20
            ],
            backgroundColor:[
                'rgba(75, 172, 198, 1.0)'
            ]
          },
          {
            label: '06/21',
            data:[
              26
            ],
            backgroundColor:[
                'rgba(171, 102, 46, 1.0)'
            ]
          },
          {
            label: '07/21',
            data:[
              20
            ],
            backgroundColor:[
                'rgba(106, 129, 59, 1.0)'
            ]
          },
          {
            label: '08/21',
            data:[
              22
            ],
            backgroundColor:[
                'rgba(110, 85, 139, 1.0)'
            ]
          },
          {
            label: '09/21',
            data:[
              28
            ],
            backgroundColor:[
                'rgba(49, 118, 137, 1.0)'
            ]
          }
        ]
      }
    });
  }


  render() {
    return (
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-2 mt-2 mb-4 text-center">
        Trabalhos por Mês
        <BarChartY chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default ChartTrabalhosMes;