import React, { Component } from "react";
import DoughnutChart from "./DoughnutChart";

class ChartRetornosTotais extends Component {
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
        labels: ["Férias", "13°", "FGTS"],
        datasets: [
          {
            label: "Retornos Totais (R$)",
            backgroundColor: [
              "rgba(128, 100, 162, 1.0)",
              "rgba(75, 172, 198, 1.0)",
              "rgba(171, 102, 46, 1.0)",
              "rgba(106, 129, 59, 1.0)",
              "rgba(110, 85, 139, 1.0)",
              "rgba(49, 118, 137, 1.0)",
            ],
            data: [6082, 1992, 764],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-2 mt-2 mb-4 text-center">
        Retornos Totais (R$)
        <DoughnutChart
          chartData={this.state.chartData}
          width={50}
          height={50}
        />
      </div>
    );
  }
}

export default ChartRetornosTotais;
