import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
// instead of
// import ReactDOM from 'react-dom'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      // HashRouter doesn't show you anything. it is a higher order or behavior
      // ordered components. HashRouter is typically root component. Everything
      // will be displayed
      <HashRouter>
        <div className='app'>
          {/* Anytime we match '/' we will display landing component. 'exactly'
          only catches the '/' and not '/text' and basically everything. */}
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
