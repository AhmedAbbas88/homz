import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import './Residencies.css';
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';
import {HiLocationMarker} from 'react-icons/hi';

const Residencies = () => {
  return (
    <section id='residences' className="r-wrapper">

        <div className="r-container paddings innerWidth">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            
            <Swiper {...sliderSettings} >
                <SliderButtons/>
                {
                    data.map((card, i)=> (
                        <SwiperSlide key={i}>
                            <div className="r-card flexColStart">
                                <img src={card.image} alt="House photo" />
                                <span className='secondaryText'>{card.name}</span>
                                <span className='primaryText'>{card.companyName}</span>
                                <span className='r-price secondaryText'>
                                    <span>{card.price}</span><span style={{ color: "orange"}}>EGP</span>
                                </span>

                                
                                <span className='secondaryText'>{card.detail}</span>

                                <span className='locScale'>
                                    <span className='logo'><HiLocationMarker color='orange' size={15}/></span>
                                    
                                    <a  href={card.locationLink} target='_blank'><span className='primaryText location'>{card.location}</span> </a>
                                </span>
                                
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        

    </section>
  )
}

export default Residencies;

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className="r-buttons flexCenter">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}