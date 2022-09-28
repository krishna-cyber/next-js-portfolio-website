import React from 'react'
import { BiLinkExternal ,BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className='footer flex flex-wrap mt-8 p-5 container mx-auto'>
      <div className="footer-main w-1/2 p-5 flex flex-col gap-3">
        <h2 className='footer-title w-fit p-2 font-normal text-2xl text-white'>AV0CAD0 CREATIVES</h2>
        <h2 className='footer-subtitle flex items-center gap-2 cursor-pointer text-2xl underline font-bold'>Work With Us<span><BiLinkExternal/></span></h2>
      </div>
      <div className="footer-contact flex justify-between items-center w-1/2">
        <div className='w-1/2'>
          <address>Ghodaghodi -4 kailali</address>
          <address>Contact @ krishna</address>
          <address>tiwarikrishna54321@gmail.com</address>
        </div>
        <div className='w-1/2'>
        <address>Follow us: on<br/> facebook Insta Youtube</address>
          <address><span className=' inline-block'><BiCopyright/></span> 2022 all right reserved</address>
        </div>
      </div>
    </footer>
  )
}

export default Footer