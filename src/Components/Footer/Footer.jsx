import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    
    <section className='f-wrapper'>
        <div className="f-container flexCenter paddings innerWidth">

            {/* Left Side*/}

            <div className="f-left flexColCenter">
                <img src="./logo2.png" alt="logo image" width={120} />
                <span className='secondaryText'>Our vision is to make all people <br /> the best place to live for them.</span>
            </div>

            {/* Right Side */}
            <div className="f-right flexColCenter">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>26, ElSheikh Zayed, Jizah, Egypt</span>
                
                <div className="f-menu flexCenter">
                  <span id=''>Property</span>
                  <span>Services</span>
                  <span>Product</span>
                  <span>About Us</span>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer