import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter, HiVideoCamera} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section id='contacts' className='c-wrapper'>

        <div className="c-container flexCenter paddings innerWidth">
            
            {/* left Sides */}

            <div className="c-left flexColStart">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you. We believe a good blace to live can make your life better</span>

                <div className="c-contect flexColStart">
                    {/* first row */}
                    <div className="row flexStart">

                        <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <MdCall size={25}/>
                                </div>
                                <div className="detail flexColStart">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>01068986066</span>
                                </div>
                            </div>
                            <div className="button flexCenter">Call Now</div>
                        </div>

                        <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="detail flexColStart">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>01068986066</span>
                                </div>
                            </div>
                            <div className="button flexCenter">Chat Now</div>

                        </div>

                    </div>

                    {/* Second Row */}

                    <div className="row flexStart">

                        <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <HiVideoCamera size={25}/>
                                </div>
                                <div className="detail flexColStart">
                                    <span className='primaryText'>Video Call </span>
                                    <span className='secondaryText'>01068986066</span>
                                </div>
                            </div>
                            <div className="button flexCenter">Call Now</div>
                        </div>

                        <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="detail flexColStart">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>ahmed@gmail.com</span>
                                </div>
                            </div>
                            <div className="button flexCenter">Message Now</div>
                            
                        </div>

                    </div>

                </div>
            
            </div>

            {/* Right Side */}

            <div className="c-right flexCenter">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>

        </div>

    </section>
  )
}

export default Contact