import React, { Component } from "react";
import LineChart from "./LineChart";

class ChartBrutoFaina extends Component {
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
          "OCEAN SHEARER 01/09B",
          "JAPIN ARROW 05/09B",
          "UASC AL KHOR 06/09C",
          "JAPIN ARROW 07/09B",
          "PLOVER ARROW 08/09C",
          "ADELINA 09/09D",
          "LOVELY KLARA 12/09C",
          "EXPLORER ASIA 14/09C",
          "MARIA THEO I 18/09D",
          "LOG IN JACARANDA 19C",
          "ALINDA 21/09A",
          "STAR AMBER 24/09C",
          "BOMAR RESOLVE 26/09D",
          "CHARISMA 27/09D",
          "CROATIA 28/09D",
          "SAGA PIONEER 30/09D",
        ],
        datasets: [
          {
            label: "Bruto/Faina (R$)",
            data: [
              507.35, 836.67, 459.65, 756.87, 313.18, 169.12, 464.68, 260.62,
              169.12, 471.11, 703.41, 298.94, 235.15, 270.37, 185.96, 459.31,
            ],
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
        Valor Bruto por Faina (R$)
        <LineChart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default ChartBrutoFaina;
