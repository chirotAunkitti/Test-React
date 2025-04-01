import { useState } from 'react'
import './App.css'

//components
import Navbar from './components/Navbar'
import UserList from './components/UserList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navbar/>
      <UserList/>
     </div>
    </>
  )
}

export default App
