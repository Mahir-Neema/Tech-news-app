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
      <div className='tags'>
        <button onClick={()=>searchPost('Angular')} className='tag'>Angular</button>
        <button onClick={()=>searchPost('Nextjs')} className='tag'>Next JS</button>
        <button onClick={()=>searchPost('sql')} className='tag'>SQL</button>
        <button onClick={()=>searchPost('Github')} className='tag'>Github</button>
      </div>
    </div>
    </>
  )
}

export default Search