import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';
import './Value.css';
import { useState} from 'react';

const Value = () => {
  return (
    <section id='value' className='v-wrapper'>

    <div className="v-container flexCenter paddings innerWidth">

        {/* Left Side */}

        <div className="v-left">
            <div className="image-container">
                <img src="./value.png" alt="Values photo" />
            </div>
        </div>

        {/* Right Side*/}

        <div className="v-right flexColStart">

            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We Give to You</span>
            <span className='secondaryText'>We always ready to help by providing the best services for you.
                <br />
                We believe a good blace to live can make your life better
            </span>

            <Accordion allowMultipleExpanded={false}
            preExpanded={[0]}>

                {
                    data.map((item, i)=> {
                        const [className, setClassName] = useState(null)
                        return(
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                               
                                <AccordionItemHeading>
                                    <AccordionItemButton className='accordionButton flexCenter'>

                                        <AccordionItemState>
                                            {({ expanded }) =>
                                                expanded
                                                ? setClassName("expanded")
                                                : setClassName("collapsed")
                                            }
                                        </AccordionItemState>

                                        <div className="icon flexCenter">{item.icon}</div>
                                        <span className='primaryText'>{item.heading}</span>
                                        <div className="icon flexCenter">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className='secondaryText'>{item.detail}</p>
                                </AccordionItemPanel>

                            </AccordionItem>
                        )
                    })
                }

            </Accordion>

        </div>

    </div>

    </section>
  )
}

export default Value