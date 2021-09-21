import React, { Component } from 'react';
import PieChart from "./PieChart";

class ChartSalarioBruto extends Component {
  constructor(){
    super();
    this.state = ({ chartData:{} })
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Liquido', 'IRPF', 'INSS', 'DAS', 'Sindical', 'Judicial', 'Outros', 'EPI/Cracha', 'Mensalidade'],
        datasets:[
          {
            label:'Salário Bruto',
            data:[
              6082,
              1992,
              764,
              700,
              0,
              0,
              0,
              0,
              0
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
      <div className="border-2 p-1 mb-1 text-center">
        <span className="border p-1">Salário Bruto</span>
           <PieChart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default ChartSalarioBruto;