import React, { Component } from "react";
import BarChartY from "./BarChartY";

class ChartTopFainas extends Component {
  constructor() {
    super();
    this.state = { chartData: {} };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "JAPIN ARROW 05/09-B",
          "JAPIN ARROW 07/09-B",
          "ALINDA 21/09-A",
          "OCEAN SHEARER 01/09-B",
          "LOGIN JACARANDA 19/09-C",
          "LOVELY KLARA 12/09-C",
          "UASC AL KHOR 06/09-C",
          "SAGA PIONEER 30/09-D",
          "PLOVER ARROW 08/09-C",
          "STAR AMBER 24/09-C",
        ],
        datasets: [
          {
            label: "Top Fainas (R$)",
            data: [
              836.67, 756.87, 703.41, 507.35, 471.11, 464.68, 459.65, 459.31,
              313.18, 298.94,
            ],
            backgroundColor: ["rgba(75, 172, 198, 1.0)"],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-2 mt-2 mb-4 text-center">
        Top Fainas (R$)
        <BarChartY chartData={this.state.chartData} />
      </div>
    );
  }
}

export default ChartTopFainas;
