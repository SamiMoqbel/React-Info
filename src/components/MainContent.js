import React from "react"
import '../styles/MainContent.css'

export default function MainContent(){
  return(
    <div className="main-container">
      <h1>Fun Facts about React</h1>
      <ul className="unordered-list">

        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>has well over 100k stars on Github</li>
        <li>is maintained by facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>

      </ul>
    </div>
  )
  }