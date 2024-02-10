import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from '/SignLingo.png'

import './App.css'

function App() {
  return (
    <><img src={logo} className="logo"></img>
      <h1>options: </h1>
        <button className= "ABCs">ABCs</button>
        <button className= "ABCs">Basic Words</button>
        <button className= "ABCs">Colors</button>
        <button className= "ABCs">Travel</button>
        <button className= "ABCs">Cooking</button>
    </>
  )
}

export default App
