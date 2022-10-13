import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import {themeContext} from '../../Context'
import { useContext } from 'react';

export const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done,setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pqss2mn', 'template_v3854pv', form.current, 'AnvPUmmA75c2cORSO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}} >Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} >
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="text" name='user_email' className='user' placeholder='Email' />
                <textarea type='submit'name='message' className='user' placeholder='Message' ></textarea>
                <input type="submit" value='Send' className='button' />
                <span>{done && "Thanks for contacting me"}</span>
                <div className="blur c-blur1" style={{background:'var(--purple )'}}></div>

            </form>
        </div>
    </div>
  )
}








