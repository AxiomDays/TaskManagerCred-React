import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Landing from "./pages/Landing.jsx"
import {Route, Routes} from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </>
  )
}

export default App
