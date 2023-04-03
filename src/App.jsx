import React from 'react'
import Search from './Components/Search'
import Articles from './Components/Articles'
import Pagination from './Components/Pagination'
// import { useContext } from "react";
// import { AppContext } from './Components/Context' 
import { useGlobalContext } from './Components/Context';

function App() {
  // const data = useContext(AppContext); 
  const data = useGlobalContext();
  return (<>
    <div>This is a news App{data}</div>
    <Search/>
    <Pagination/>
    <Articles/>
    </>
  )
}

export default App