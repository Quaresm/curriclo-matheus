import React from 'react'
import './navbar.css'
import {IoHomeOutline} from 'react-icons/io5'
import {IoIosHelpCircleOutline} from 'react-icons/io'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {BiBookContent} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineStar} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='nav_container'>
      <nav>
        <a href="#"><IoHomeOutline/></a>
        <a href="#about"><IoIosHelpCircleOutline/></a>
        <a href="#education"><BiBookContent/></a>
        <a href="#skill"><AiOutlineStar/></a>
        <a href="#experience"><MdOutlineWorkOutline/></a>
        <a href="#contact"><BsTelephone/></a>
      </nav>
    </div>
  )
}

export default Navbar