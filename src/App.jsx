import { useState } from 'react'
import './App.css'
import Articles from './Components/Articles'
import Search from './Components/Search'
import Pagination from './Components/Pagination'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>This is a news app.</div>
    <Search/>
    <Pagination/>
    <Articles/>
    </>
  )
}

export default App
