import React from 'react'
import Weather from './components/Weather'

console.log("VITE_APP_ID:", '5862b2c75281136744c16d4391b2f3ee');

const App = () =>{
  return (
    <div className='app'>
      <Weather/>
    </div>
  )
}

export default App