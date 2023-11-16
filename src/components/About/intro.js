import React from 'react'
import './intro.css'
import bg from '../../assets/code.gif'
import contact from '../../assets/contact.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">
                        Chris Nguyen
                    </span>
                    <br />
                        Software Developer
                    </span>
                    <p className="introDescription">
                        I'm a software developer and student at Kennesaw State University
                    </p>
                    <Link>
                        <button className="btn">
                            <img src={contact} alt="Contact Me" className='btnImg'/>
                            Contact Me
                        </button>
                    </Link>
                
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro;