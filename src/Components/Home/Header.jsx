import React from 'react'
import './Home.css'
import { Drawer } from './Drawer'
const Header = () => {
  return (
    <div className='div-container-header'>
      <div className='div-container-elements-header'>
        <div className='div-container-brand-header'>
          <p className='p-title-name-header'>Matias Garrido</p>
          <p  className='p-title-service-header'>Web Developer & Designer</p>
        </div>
        <div className='div-container-menu-header'>
            <a href="/">EXPERIENCE</a>
            <a href="/">PROJECTS</a>
            <a href="/">CONTACT ME</a>
        </div>
        <div className='div-container-drawer-header'>
          <Drawer/>
        </div>
      </div>
    </div>
  )
}

export default Header