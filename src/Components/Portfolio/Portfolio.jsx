import React from 'react'
import './Portfolio.css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import Musicapp from '../../img/musicapp.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {themeContext} from '../../Context'
import { useContext } from 'react';

export const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio'>
        {/* heading */}
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>


        {/* slider */}

        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Musicapp} alt="" />
            </SwiperSlide>
        </Swiper>

        
    </div>
  )
}
