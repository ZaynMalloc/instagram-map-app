import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

const propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number
}

const defaultProps = {
  center: {lat: 39, lng: -98},
  zoom: 3
}

export default class Map extends React.Component {
  render () {
    return (
      <div>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom} />
      </div>
    )
  }
}

Map.propTypes = propTypes
Map.defaultProps = defaultProps
