import React from 'react'
import '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className='flex justify-between text-white bg-slate-700 items-center mx-auto py-3 px-28'>
        <a href=""> Avocodo</a>
        <ul className='menu-items flex gap-8'>
            <li >DESIGN</li>
            <li>DEVELOPMENT</li>
            <li>PRODUCTION</li>
            <li>PHOTOGRAPHY</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar