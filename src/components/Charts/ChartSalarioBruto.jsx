import React, { Component } from 'react';
import PieChart from "./PieChart";
import "chartjs-plugin-datalabels";

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
          },

        ]

      },
   });
  }

  render() {
    return (
      <div className="border-2 p-1 mb-1 text-center">
        <span className="border p-1">Salário Bruto</span>
           <PieChart chartData={this.state.chartData} width={50} height={50} />
      </div>
    );
  }
}

export default ChartSalarioBruto;


// import React from "react";
// import ReactDOM from "react-dom";
// import { Pie } from "react-chartjs-2";
// import "chartjs-plugin-datalabels";

// import "./styles.css";

// var options = {
//   plugins: {
//     datalabels: {
//       formatter: (value, ctx) => {
//         let datasets = ctx.chart.data.datasets;

//         if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
//           let sum = datasets[0].data.reduce((a, b) => a + b, 0);
//           let percentage = Math.round((value / sum) * 100) + "%";
//           return percentage;
//         } else {
//           return percentage;
//         }
//       },
//       color: "red"
//     }
//   }
// };

// function App() {
//   const data = {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)"
//         ],
//         borderColor: [
//           "rgba(255,99,132,1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)"
//         ],
//         borderWidth: 1
//       }
//     ]
//   };
//   return (
//     <div className="App" style={{ width: 500 }}>
//       <Pie data={data} width={50} height={50} options={options} />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);