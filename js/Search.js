import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'


const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {/*}<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>*/}
        {/*}{preload.shows.map(function (show) {
          return (
            <h3>{show.title}</h3>
          )
        })}*/}
        {preload.shows.map((show) => {
          return (
            <ShowCard show={show} />
          )
        })}

      </div>
    )
  }
})

export default Search
