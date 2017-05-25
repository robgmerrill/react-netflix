import React from 'react'
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
            <div className='show-card'>
              <img src={`/public/img/posters/${show.poster}`} />
              <div>
                <h3>{show.title}</h3>
                <h4>({show.year})</h4>
                <p>{show.descriptions}</p>
              </div>
            </div>
          )
        })}

      </div>
    )
  }
})

export default Search
