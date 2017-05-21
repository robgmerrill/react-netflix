import React from 'react'
// same as "var React = require('react')"

// Second component
var MyTitle = React.createClass({
  // every component must have a render method and the method must return markup
  // the render method must be a pure function
  render: function () {
    // javascript object style put inside javascript expression
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={ style }>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle
