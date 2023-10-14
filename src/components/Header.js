import React from "react"
import reactLogo from '../images/React-icon.svg.png';
import '../styles/Header.css'

export default function Header(){
    return(
      <div className="dark--navbar">
  
        <nav>
          <div className="header-container">
            <img className="logo-pic" src={reactLogo} />
            <h3 className="header-title">ReactFacts</h3>
          </div>

          
          
        </nav>
  
      </div>
    )
  }