import React from 'react'
import {render} from 'react-dom'
import {Button} from 'react-bootstrap'
import './app.scss'

class Hello extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello from React !</h1>
        <Button bsStyle='primary'>Search</Button>
      </div>
    )
  }
}

render(
  <Hello />, document.getElementById('root')
)
