import React from 'react'
import {render} from 'react-dom'
import {Button, Form, FormControl} from 'react-bootstrap'
import './app.scss'
import Map from './map.js'

class Hello extends React.Component {
  render () {
    return (
      <div>
        <Form inline>
          <a>Instagram Gelocator</a>
          <FormControl type='text' placeholder='Search' />
          <Button bsStyle='primary'>Search</Button>
          <Map />
        </Form>
        <Map />
      </div>
    )
  }
}

render(
  <Hello />, document.getElementById('root')
)
