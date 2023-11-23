import React from 'react'
import './contact.css'
import LinkedinIcon from '../../assets/linkedin.svg'
import GithubIcon from '../../assets/github.svg'
import GmailIcon from '../../assets/gmail.svg'

const Contact = () => {
  return (
    <section id="contact">
        <h1 className="contactTitle">
            Contact Me
        </h1>
        <span className="contactDesc">
            Please fill out the form below to send  me a message!
        </span>
        <form action="" className="contactForm">
            <input type="text" className="name" placeholder='Your Name'/>
            <input type="email" className="email" placeholder="Email"/>
            <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
                <img src={LinkedinIcon} alt="LinkedIn" className="link" />
                <img src={GithubIcon} alt="GitHub" className="link" />
                <img src={GmailIcon} alt="Gmail" className="link" />
            </div>
        </form>
    </section>
  )
}

export default Contact