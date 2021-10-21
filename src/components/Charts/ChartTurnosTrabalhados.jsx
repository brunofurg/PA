import React, { Component } from "react";
import PolarChart from "./PolarChart";

class ChartTurnosTrabalhados extends Component {
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
        labels: ["A", "B", "C", "D"],
        datasets: [
          {
            label: "Agosto2021",
            text: "Turnos Trabalhados",
            data: [4, 3, 7, 12],
            backgroundColor: [
              "rgba(79, 129, 189, 1.0)",
              "rgba(192, 80, 77, 1.0)",
              "rgba(155, 187, 89, 1.0)",
              "rgba(128, 100, 162, 1.0)",
              "rgba(75, 172, 198, 1.0)",
              "rgba(171, 102, 46, 1.0)",
              "rgba(106, 129, 59, 1.0)",
              "rgba(110, 85, 139, 1.0)",
              "rgba(49, 118, 137, 1.0)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-2 mt-2 mb-4 text-center">
        Turnos Trabalhados
        <PolarChart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default ChartTurnosTrabalhados;
