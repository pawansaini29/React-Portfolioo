import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { Card } from '../Card/Card'
import Resume from './Resume.pdf'
import {themeContext} from '../../Context'
import { useContext } from 'react';

export const Services = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className='services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit of printing
                <br />
                ispum is simpley dummy text of printing
            </span>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>

            <div className="blur s-blur1"></div>
            

        </div>

        {/* right side */}
        <div className="cards">

            {/* first card */}
            <div style={{left:'14rem'}}>
                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={'Figma,Sketch,Photoshop,Adobe xd'}
                />
            </div>

            {/* second card */}
            <div style={{top:'12rem', left:'-4rem'}}>
                <Card 
                emoji={Glasses}
                heading={'Developer'}
                detail={'Html, Css , Javascript, React'}
                />
            </div>

            {/* third card */}
            <div style={{top:'19rem', left:'12rem'}}>
                <Card 
                emoji={Humble}
                heading={'UI/UX'}
                detail={'Responsive user interface and quality code'}
                 />
            </div>
            {/* blurr */}
            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>



                
                
 
        </div>
    </div>
  )
}
