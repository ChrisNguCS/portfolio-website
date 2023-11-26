import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/ologo.png';
import contactImg from '../../assets/email.svg';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menu_btn = document.querySelector('.hamburger');

    menu_btn.addEventListener('click', function (){
        menu_btn.classList.toggle('is-active');
    });

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
            {/* <img src={menu} alt="Menu" className="mobileMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex':'none', }}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div> */}
        </nav>
    )
}

export default Navbar