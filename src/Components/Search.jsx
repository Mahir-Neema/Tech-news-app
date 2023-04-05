import React from 'react'
import { useGlobalContext } from './Context'
import './Search.css'

function Search() {

  const {query,searchPost} = useGlobalContext();

  return (<>
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder='search the keyword' className="search_input"
          value={query}
          onChange={(e)=>searchPost(e.target.value)}
        />
      </form>
    </div>
    </>
  )
}

export default Search