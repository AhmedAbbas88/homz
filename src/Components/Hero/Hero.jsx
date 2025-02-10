import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='hero-container flexCenter paddings innerWidth'>

                {/* Left Side */}
                <div className="hero-left flexColStart">
                    <div className="hero-title">
                        <div className='OrangeCircle'></div>
                        <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2, type: "spring"
                        }}
                        >
                            Discover <br />
                            Most Suitable <br /> Property 
                        </motion.h1>
                    </div>

                    <div className="hero-des flexColStart">
                        <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="search-bar flexCenter">
                        <HiLocationMarker color='var(--blue)' size={25}/>
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>

                    <div className="stats flexCenter">
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={9800} end={10000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp start={1800} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="stat flexColCenter">
                            <span>
                                <CountUp end={35} duration={5} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winnung</span>
                        </div>
                    </div>
                    
                </div>

                {/* Right Side */}
                <div className="hero-right flexCenter">
                    <motion.div 
                    initial={{x: "7rem", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 2, type: 'spring'}}
                    className="image-container">
                        <img src="./hero-image.png" alt="hero img" />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default Hero