import React from 'react'
import "./style.css"
import Drawer from './drawer'
import Button from '../Button'

const Header = () => {
  return (
    <div className="navbar">
        <h1 className="logo">CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
        <div className="links">
            <a href="/">
            <p className="link">Home</p>
            </a>
            <a href="/">
            <p className="link">Compare</p>
            </a>
            <a href="/">
            <p className="link">Watchlist</p>
            </a>
            <a href="/">
            <Button text="Dashboard" onClick={()=>{}} outlined={false}/>
            </a>
        </div>
        <div className="mobile-drawer">
            <Drawer />
            </div>
    </div>
  )
}

export default Header