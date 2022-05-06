import React from 'react'
import './navbar.css'
import {IoHomeOutline} from 'react-icons/io5'
import {IoIosHelpCircleOutline} from 'react-icons/io'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {BiBookContent} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineStar} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {
  // const [activeNav, setActiveNav] = useState({a1: false,a2: false,a3: false,a4: false,a5: false,a6: false})
  
  // const [refresh, setRefresh] = useState(false)

  // function changeState(e) {
  // let test = {a1: false,a2: false,a3: false,a4: false,a5: false,a6: false}

  // let target = activeNav[e.target.id]
  // test= {...activeNav,[e.target.id]:!target}
  
  // setActiveNav
  // }
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='nav_container'>
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active button-icon': 'button-icon' }>
          <IoHomeOutline/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active button-icon': 'button-icon' }>
          <IoIosHelpCircleOutline/></a>
        <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active button-icon': 'button-icon' }>
          <BiBookContent/></a>
        <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active button-icon': 'button-icon' } >
          <AiOutlineStar/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active button-icon': 'button-icon' } >
          <MdOutlineWorkOutline/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active button-icon': 'button-icon' }>
          <BsTelephone/></a>
      </nav>
    </div>
  )
}

export default Navbar