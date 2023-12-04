import React from 'react';
import './navbar.css';
import logo from '../../assets/ologo.png';
import contactImg from '../../assets/email.svg';
import {Link} from 'react-scroll';



const Navbar = () => {

    
    window.onload = function () {
        const menu_btn = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.navMenu')
        const listItem = document.querySelector('.listItem')
        menu_btn.addEventListener('click', function (){
            menu_btn.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');
        });

        listItem.addEventListener('click', function (){
            menu_btn.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');
        });
    
    }

    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg"/>
                Contact Me
            </button>

            <button className="hamburger">
                <div className="bar"></div>
            </button>
            <div className='navMenu'>
            <Link to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Home</Link>
            <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem">About</Link>
            <Link to='projects' spy={true} smooth={true} offset={50} duration={500} className="listItem">Portfolio</Link>
            <Link to='contact' spy={true} smooth={true} offset={50} duration={500} className="listItem">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar