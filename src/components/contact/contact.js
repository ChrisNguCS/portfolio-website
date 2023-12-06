import React, {useRef} from 'react'
import './contact.css'
import LinkedinIcon from '../../assets/linkedin.svg'
import GithubIcon from '../../assets/github.svg'
import GmailIcon from '../../assets/gmail.svg'
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pw879iz', 'template_36ydo33', form.current, 'JRFQS1GUK2I4mnPs8')
      .then((result) => {
				console.log(result.text);
      }, (error) => {
				console.log(error.text);
      });
  };
		return (
			<section id="contact">
				<h1 className="contactTitle">
						Contact Me
				</h1>
				<span className="contactDesc">
						Please fill out the form below to send  me a message!
				</span>
				<form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
					<input type="text" className="name" placeholder='Your Name' name='user_name'/>
					<input type="email" className="email" placeholder="Email" name='user_email'/>
					<textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
					<button type='submit' value='Send' className="submitBtn">Submit</button>
					<div className="links">
						<a href="https://www.linkedin.com/in/chrisngu/">
							<img src={LinkedinIcon} alt="LinkedIn" className="link"/>
						</a>
						<a href="https://github.com/ChrisNguCS">
							<img src={GithubIcon} alt="GitHub" className="link" />
						</a>
						<a href="mailto:chrisngucs@gmail.com">
							<img src={GmailIcon} alt="Gmail" className="link" />	
						</a>
					</div>
				</form>
		</section>
)
}

export default Contact