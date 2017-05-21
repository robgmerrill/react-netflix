
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
