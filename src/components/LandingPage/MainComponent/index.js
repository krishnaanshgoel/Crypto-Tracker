import React from 'react'
import "./style.css"
import Button from '../../common/Button'
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
const MainComponent = () => {
  return (
    <div className="flex-info">
        <div className="left-com">
            <motion.h1
             initial={{opacity:0,y:50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5}}
            className="track-crypto-h">Track Crypto</motion.h1>
            <motion.h1 
             initial={{opacity:0,y:50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5, delay:0.5}}
            className="real-time-h">Real Time.</motion.h1>
            <motion.p
             initial={{opacity:0,y:50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5,delay:0.75}}            
            className="text-para">Track Crypto through a public api in real time. Visit the dashboard to do so!
            </motion.p>
            <motion.div 
             initial={{opacity:0,x:50}}
             animate={{opacity:1,x:0}}
             transition={{duration:0.5,delay:0.5}}             
            className="btn-flex">
               <Link to={"/dashboard"}> <Button text="Dashboard" outlined={false} onClick={()=>{}}></Button></Link>
                <Button text="Share App" outlined={true} onClick={()=>{}}></Button>
            </motion.div>
        </div>
        <div className="right-com">
          <motion.img
             initial={{y:-10}}
             animate={{y:10}}
             transition={{
              type:"smooth",
              repeatType:"mirror",
              repeat:Infinity,
              duration:2
             }}           
          src={iphone} className="iphone"></motion.img>
          <img src={gradient} className="gradient"></img>
        </div>
    </div>
  )
}

export default MainComponent