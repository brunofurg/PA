import React, { Component } from "react";
import PieChart from "./PieChart";

class ChartGanhosOperador extends Component {
  constructor() {
    super();
    this.state = { chartData: {} };
  }

  componentWillMount() {
    // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "Sagres",
          "Tecon",
          "Vanzin",
          "Termasa",
          "AGM",
          "CTIL",
          "Livenport",
          "Bianchini",
          "Serra Morena",
        ],
        datasets: [
          {
            label: "Ganhos/Operador (R$)",
            data: [3338.06, 1351.87, 1312.02, 559.56, 0, 0, 0, 0, 0],
            backgroundColor: [
              "rgba(75, 172, 198, 1.0)",
              "rgba(171, 102, 46, 1.0)",
              "rgba(106, 129, 59, 1.0)",
              "rgba(110, 85, 139, 1.0)",
              "rgba(49, 118, 137, 1.0)",
              "rgba(79, 129, 189, 1.0)",
              "rgba(192, 80, 77, 1.0)",
              "rgba(155, 187, 89, 1.0)",
              "rgba(128, 100, 162, 1.0)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-2 mt-2 mb-4 text-center">
        Ganhos por Operador (R$)
        <PieChart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default ChartGanhosOperador;
