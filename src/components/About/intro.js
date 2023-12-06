import React from 'react'
import './intro.css'
import bg from '../../assets/coding.webm'
import resumeImg from '../../assets/resume.svg'
import {Link} from 'react-scroll';

const Intro = () => {

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

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
                        Currently a last year student at Kennesaw State University
                    </p>
                    <Link>
                    <button className="btn" onClick={() => openInNewTab(process.env.PUBLIC_URL + '/Christopher_Nguyen_Resume.pdf')}>
                        <img src={resumeImg} alt="Resume" className='btnImg'/>
                        <p className='btnText'>
                            Resume
                        </p>
                    </button>
                    </Link>
                
            </div>
            <video className="bg" muted autoPlay loop>
                <source src={bg} type="video/webm"/>
            </video>
        </section>
    )
}

export default Intro;