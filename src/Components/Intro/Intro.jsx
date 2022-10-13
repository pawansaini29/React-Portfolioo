import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import Pawan from '../../img/Pawan.png';
import Pawans from '../../img/2.jpeg';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context'
import { useContext } from 'react';
// import {motion} from 'framer-motion';

export const Intro = () => {


    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hy! I Am</span>
                <span>Pawan Saini</span>
                <span>Frontend Developer with high 
                    level of experience in web designing
                    and development, producting the Quality work
                </span>
            </div>
            <button className="i-button button">Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/pawansaini29"  target={"_blank"}><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/pawan-saini-29dec/" target={"_blank"}><img src={Linkedin} alt="" /></a>
                <a href="https://www.instagram.com/this_is_pawan_29/" target={"_blank"}><img src={Instagram} alt="" /></a>
            </div>

        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Pawan} alt="" />
            {/* <img src={boy} alt="" /> */}
            <img src={glassesimoji} alt="" />

            {/* floating div 1 */}
            <div className='floatingDiv1'>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </div>

            {/* floating div 2 */}
            <div className='floatingDiv2'>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/> 
            </div>

            {/* blur div */}
            <div className="blur blurDiv1">

            </div>

            <div className="blur blurDiv2"></div>
        </div>
    </div>
  )
}
