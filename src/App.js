import React, { Component } from 'react'
import Plot from 'react-plotly.js'
import PiePlot from './components/PiePlot'
import BoxPlot from './components/BoxPlot'
import TimePlot from './components/TimePlot'
import HeatPlot from './components/HeatPlot'
import SubPlot from './components/SubPlot'

export default class App extends Component {
  render() {
    return (
      <div className='App'> 
        <h1>Bar Plot</h1>
          <Plot data={[{
            x:[1,2,3],
            y:[1,2,3],
            type: 'bar',
            mode: 'lines+markers',
            maker: {color: 'red'}
          }]}
          layout={{width: 1200, height:600, title: 'Simple Bar Plot'}}
          />

        <h1>Pie Plot</h1>
          <PiePlot />
        

        <h1>Box Plot</h1>
          <BoxPlot />

        <h1>Time Plot</h1>
          <TimePlot />

        <h1>Heat Plot</h1>
          <HeatPlot />

        <h1>SubPlot Plot</h1>
          <SubPlot />

      </div>
    )
  }
}
