import React from 'react'
import {Button, Form, FormControl} from 'react-bootstrap'
import './app.scss'

export default class Bar extends React.Component {
  render () {
    return (
      <div>
        <Form inline>
          <a>Twitter Gelocator</a>
          <FormControl type='text' placeholder='Search' />
          <Button bsStyle='primary'>Search</Button>
        </Form>
      </div>
    )
  }
}
