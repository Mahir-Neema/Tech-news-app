import React from 'react'
import { useGlobalContext } from './Context'

function Search() {

  const {query,searchPost} = useGlobalContext();

  return (<>
    <div>
      <h1>Tech News</h1>
      <form>
        <input type='text' placeholder='search the keyword'
          value={query}
          onChange={(e)=>searchPost(e.target.value)}
        />
      </form>
    </div>
    </>
  )
}

export default Search