// https://www.youtube.com/watch?v=Ly-9VTXJlnA
// Using Chart.js With React

import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChartY extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: props.chartData };
  }

  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          options={{
            indexAxis: "y",
          }}
        />
      </div>
    );
  }
}

export default BarChartY;
