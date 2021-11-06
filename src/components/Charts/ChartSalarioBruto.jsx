import React, { Component } from "react";
import PieChart from "./PieChart";

class ChartSalarioBruto extends Component {
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
          "Liquido",
          "IRPF",
          "INSS",
          "DAS",
          "Sindical",
          "Judicial",
          "Outros",
          "EPI/Cracha",
          "Mensalidade",
        ],
        datasets: [
          {
            label: "Salário Bruto (R$)",
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
            data: [4662.36, 863.11, 642.34, 393.7, 0, 0, 0, 0, 0],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-2 mt-2 mb-4 text-center">
        Salário Bruto (R$)
        <PieChart chartData={this.state.chartData} width={50} height={50} />
      </div>
    );
  }
}

export default ChartSalarioBruto;
