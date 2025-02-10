import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {

  const [menuIcon, setMenuIcon] = useState(false)

  const getMenuStyles = (menuIcon) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuIcon && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
        <div className="h-container flexCenter paddings innerWidth">

            <img src="./logo.png" alt="logo" width={100} />
           
            <OutsideClickHandler onOutsideClick={()=>{setMenuIcon(false)}}>
            <div className="h-menu flexCenter" style={getMenuStyles(menuIcon)}>
                <a href="#residences">Residencies</a>
                <a href="#value">our value</a>
                <a href="#contacts">Contact Us</a>
                <a href="#GetStarted">Get Started</a>
                <button className='button'>
                <a href="#contacts">Contact</a>
                </button>
            </div>
            </OutsideClickHandler>

            <div className="menu-icon" onClick={()=>setMenuIcon((prev)=>!prev)}>
              <BiMenuAltRight size={30}/>
            </div>
        </div>

    </section>
  )
}

export default Header