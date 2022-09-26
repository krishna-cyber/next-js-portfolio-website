import React from 'react'



const Navbar = () => {
  return (
    <nav className='flex container justify-between text-white bg-slate-700 items-center mx-auto py-3 px-28'>
        <a href="">KRISHNA</a>
        <ul className='flex gap-12'>
            <li className='menu-link'>DESIGN</li>
            <li className='menu-link'>DEVELOPMENT</li>
            <li className='menu-link'>PRODUCTION</li>
            <li className='menu-link'>PHOTOGRAPHY</li>
            <li className='menu-link'>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar