import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './Components/Box.jsx'
import hi from './assets/image.png'
import cloudy from './assets/seasons/cloudy.png'
import Slice1 from './assets/chibi/Slice1.png'
function App() {
  return (
    <>
    <Box image={cloudy} daytype={"Cloudy"} humidity={80} aqi={50} temp={22} tomorrow={25} recommendation={"Carry an umbrella"} chibi={Slice1}>
      </Box>

          {/* <div className="bg-pink-400 w-full h-[250px] rounded-lg overflow-hidden">
        <img
          src= {hi}
          alt="Weather"
          className="w-full h-full object-cover"
        />
      </div> */}
    </>
  )
}

export default App
