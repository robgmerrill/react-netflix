import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div


// Factories
var MyTitleFactory = React.createFactory(MyTitle)

// parent passes on properties to children to display
var MyFirstComponent = React.createClass({
  render: function () {
    return(
    div(null,
      MyTitleFactory({title: 'props are the best', color: 'peru', fontSize: '60'}),
      MyTitleFactory({title: 'props are the second best', color: 'mediumaquamarine'}),
      MyTitleFactory({title: 'props are the third best', color: 'tomato'}),
      MyTitleFactory({title: 'props are the fourth best', color: 'blanchedalmond'})
  )
)
}
})



ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
