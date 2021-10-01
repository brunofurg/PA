// https://www.youtube.com/watch?v=Ly-9VTXJlnA
// Using Chart.js With React

import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component{
  constructor(props){
    super(props);
    this.state = ({ chartData:props.chartData })
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'bottom',
  }

  render(){
    return (
      <div>
        <Pie
          data={this.state.chartData}
          options={{
            plugins: {
              datalabels: {
                formatter: (value, ctx) => {
                  let datasets = ctx.chart.data.datasets;
          
                  if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                    const sum = datasets[0].data.reduce((a, b) => a + b, 0);
                    const percents = Math.round((value / sum) * 100) + "%";
                    return percents;
                  } else {
                    return "";
                  }
                },
                color: "blue"
              }
            },
            title:{
              display:this.props.displayTitle,
              text:'PolarChart',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default PieChart;