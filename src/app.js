import React from 'react'
import {render} from 'react-dom'
import './app.scss'
import Bar from './bar.js'
import Map from './map.js'

class App extends React.Component {
  render () {
    return (
      <div>
        <Bar />
        <Map />
      </div>
    )
  }
}

render(
  <App />, document.getElementById('root')
)
