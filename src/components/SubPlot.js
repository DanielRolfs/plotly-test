import React, { Component } from 'react'
import Plot from 'react-plotly.js'

export default class SubPlot extends Component {

    constructor(props){
        super(props)

        var trace1 = {
            x: [1,2,3],
            y: [2,3,4],
            type: 'scatter'
        }

        var trace2 = {
            x: [20,32,40],
            y: [2,3,4],
            xaxis: 'x2',
            yaxis: 'y',
            type: 'scatter'
        }

        var trace3 = {
            x: [2,3,4],
            y: [200,700,800],
            xaxis: 'x',
            yaxis: 'y3',
            type: 'scatter'
        }

        var trace4 = {
            x: [2000,5000,6000],
            y: [1000,7000,9000],
            xaxis: 'x4',
            yaxis: 'y4',
            type: 'scatter'
        }

        var data = [trace1,trace2,trace3,trace4]

        var layout = {
            grid: {
                rows: 2,
                columns: 2,
                subplots: [['xy','x2y'],['xy3','x4y4']],
                roworder: 'bottom to top'
            }
        };
        this.state = {data: data,layout}

    }
  
render() {
    return (
        <div>
          <Plot
            data={this.state.data} layout={this.state.layout}
            />
        </div>
    )
  }
}
