import React from 'react'
import "./style.css"
import Button from '../../common/Button'
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion"
const MainComponent = () => {
  return (
    <div className="flex-info">
        <div className="left-com">
            <h1 className="track-crypto-h">Track Crypto</h1>
            <h1 className="real-time-h">Real Time.</h1>
            <p className="text-para">Track Crypto through a public api in real time. Visit the dashboard to do so!
            </p>
            <div className="btn-flex">
                <Button text="Dashboard" outlined={false} onClick={()=>{}}></Button>
                <Button text="Share App" outlined={true} onClick={()=>{}}></Button>
            </div>
        </div>
        <div className="right-com">
          <img src={iphone} className="iphone"></img>
          <img src={gradient} className="gradient"></img>
        </div>
    </div>
  )
}

export default MainComponent