import React from 'react'
import Search from './Components/Search'
import Articles from './Components/Articles'
// import { useContext } from "react";
// import { AppContext } from './Components/Context' 
import { useGlobalContext } from './Components/Context';
import './App.css'

function App() {
  // const data = useContext(AppContext); 
  const data = useGlobalContext(); 
  return (<>
    <div className="heading">Tech News</div>
    <Search/>
    <Articles/>
    </>
  )
}

export default App