import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='social'>
      <a href="https://www.linkedin.com/in/matheus-s-quaresma/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Quaresm" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  )
}

export default Socials