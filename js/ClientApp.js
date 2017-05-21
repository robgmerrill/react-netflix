/* global React ReactDOM */

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

// Factories
var MyTitleFactory = React.createFactory(MyTitle)

// parent passes on properties to children to display
var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'props are the best', color: 'peru', fontSize: '60'}),
    MyTitleFactory({title: 'props are the second best', color: 'mediumaquamarine'}),
    MyTitleFactory({title: 'props are the third best', color: 'tomato'}),
    MyTitleFactory({title: 'props are the fourth best', color: 'blanchedalmond'})
  )
)

// a component is nothing but a function
// var MyFirstComponent = (
//   div(null,
//     React.createElement(MyTitle),
//     React.createElement(MyTitle),
//     React.createElement(MyTitle),
//     React.createElement(MyTitle)
//   )
// )

// Long version
// var MyFirstComponent = React.createClass({
//   render: function() {
//     return (
//       React.DOM.div(null,
//         React.DOM.h1(null, 'This is my first component!')
//       )
//     )
//   }
// })

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
