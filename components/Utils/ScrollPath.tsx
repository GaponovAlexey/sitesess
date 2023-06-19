"use client"
import { Link } from "react-scroll"
// import {  } from 'react-scroll'
const ScrollPath = ({ to, children }: any) => {
  return (
    <Link to={to} smooth={true} duration={1500}>
      {children}
    </Link>
  )
}

export default ScrollPath
