import React from 'react'
// same as "var React = require('react')"

var div = React.DOM.div
var h1 = React.DOM.h1

// Second component
var MyTitle = React.createClass({
  // every component must have a render method and the method must return markup
  // the render method must be a pure function
  render: function () {
    return (
      div(null,
        h1({style: { backgroundColor: this.props.color, fontSize: this.props.fontSize }}, this.props.title)
      )
    )
  }
})

export default MyTitle
