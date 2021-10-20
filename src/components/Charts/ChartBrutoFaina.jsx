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
          "African Pheasant 26/08-D",
          "Esperance Bay 27/08-C",
          "Yasa Jupiter 28/08-B",
          "Cape Artemisio 29/08-A",
          "Esperance Bay 29/08-D",
          "Nordtajo 30/08-C",
          "Medan Express 31/08-B",
          "Marina K 01/09-A",
          "Esperance Bay 01/09-D",
          "MSC Coruna 02/09-C",
        ],
        datasets: [
          {
            label: "Bruto/Faina (R$)",
            data: [
              661.58, 582.52, 267.71, 344.74, 768.44, 653.04, 653.04, 339.19,
              297.45, 152.38,
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
        <LineChart
          chartData={this.state.chartData}
          location="Massachusetts"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default ChartBrutoFaina;
