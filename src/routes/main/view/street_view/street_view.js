import React from 'react';
import ReactDOM from 'react-dom';

import asyncLoading from 'react-async-loader';

/**
MIT License

Copyright (c) 2016 Kovács András

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class ReactStreetview extends React.Component {

  constructor() {
    super();
    this.state = {
      streetView: null,
      domElementId: 'street-view'
    };
  }

  update(canvas, mapProps) {
    const googleMaps = mapProps.googleMaps;

    const sv = new googleMaps.StreetViewPanorama(
      canvas,
      mapProps.streetViewPanoramaOptions
    );

    this.setState({ streetView: sv });
  }

  initialize(canvas) {
    if (this.props.googleMaps && this.state.streetView == null) {
      this.update(canvas, this.props);
    }
  }

  componentDidMount() {
    this.initialize(ReactDOM.findDOMNode(this));
  }

  componentDidUpdate() {
    this.initialize(ReactDOM.findDOMNode(this));
  }

  componentWillReceiveProps(nextProps) {
    this.update(ReactDOM.findDOMNode(this), nextProps);
  }

  render() {
    return <div
      style={{
        height: '100%'
      }}
      id={this.state.domElementId}
      ></div>;
  }
}

ReactStreetview.propTypes = {
  apiKey: React.PropTypes.string.isRequired,
  streetViewPanoramaOptions: React.PropTypes.object.isRequired
};

ReactStreetview.defaultProps = {
  streetViewPanoramaOptions: {
    position: { lat: 46.9171876, lng: 17.8951832 },
    pov: { heading: 0, pitch: 0 },
    zoom: 1
  }
};

function mapScriptsToProps(props) {
  const googleMapsApiKey = props.apiKey;
  return {
    googleMaps: {
      globalPath: 'google.maps',
      url: 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey,
      jsonp: true
    }
  };
}

export default asyncLoading(mapScriptsToProps)(ReactStreetview);