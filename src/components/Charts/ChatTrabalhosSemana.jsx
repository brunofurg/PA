import React, { Component } from "react";
import BarChart from "./BarChart";

class ChartTrabalhosSemana extends Component {
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
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5"],
        datasets: [
          {
            label: "08/2021",
            text: "Trabalhos/Semana",
            data: [6, 7, 6, 5, 2],
            backgroundColor: ["rgba(79, 129, 189, 1.0)"],
          },
          {
            label: "07/2021",
            data: [2, 5, 6, 4, 0],
            backgroundColor: ["rgba(192, 80, 77, 1.0)"],
          },
          {
            label: "06/2021",
            text: "Trabalhos/Semana",
            data: [5, 5, 5, 5, 1],
            backgroundColor: ["rgba(128, 100, 162, 1.0)"],
          },
          {
            label: "05/2021",
            data: [5, 3, 4, 3, 2],
            backgroundColor: ["rgba(75, 172, 198, 1.0)"],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-2 mt-2 mb-4 text-center">
        Trabalhos por Semana
        <BarChart
          chartData={this.state.chartData}
          location="Massachusetts"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default ChartTrabalhosSemana;
