// https://www.youtube.com/watch?v=Ly-9VTXJlnA
// Using Chart.js With React

import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component{
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
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'BarChart',
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

export default BarChart;