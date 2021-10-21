// https://www.youtube.com/watch?v=Ly-9VTXJlnA
// Using Chart.js With React

import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: props.chartData };
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          options={{
            title: {
              color: "white",
            },
            legend: {
              color: "white",
            },
            color: "white",
          }}
        />
      </div>
    );
  }
}

export default LineChart;
