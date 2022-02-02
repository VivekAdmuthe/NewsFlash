import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
        <footer>
        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright : 
    <Link className="text-reset fw-bold td-none" target="_blank" to="https://www.linkedin.com/in/vivek-admuthe-6b3a50206/"> VivekAdmuthe</Link>
  </div>
  </footer>   
        </>
    )
}
