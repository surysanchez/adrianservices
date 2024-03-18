
import React from 'react';
import {motion} from "framer-motion"
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCarpenter } from "react-icons/md";
import images from '../../constants/images';
import './Navbar.css';

const itemsVariants= {
  open: {
   y: 0,
   opacity: 1,
 },
 closed: {
   y: 50,
   opacity: 0,
  }
 }

const Navbar = ({user, setUser}) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar" id='home'>
      <a href="#header">
      <div className="app__navbar-logo" >
      <img src={images.adrianlogo} style={{borderRadius:'15%'}} alt="app logo" />
      </div>
      </a>
      <motion.span className='navbarName' style={{letterSpacing:'5px', color:'orangered'}} initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:1}}>Adrian Abreu Garcia</motion.span>
      <motion.ul className="app__navbar-links" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:1}}>
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About Me</a></li>
        <li className="p__opensans"><a href="#services">Services</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
        <li className="p__opensans"><a href="#gallery">Gallery</a></li>
        {/* { user ? (

          <a  href="/logout" >LOG OUT</a>
        ) : (
          <a  href="/auth/google" 
            >LOG IN&nbsp;<img className='login-pic' src="https://i.imgur.com/FHjYyi0.png"
          /></a>
        ) 
        } */}
  
      </motion.ul>
        <a href="#contact" className="p__opensans">Free Quote</a>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <motion.div className="app__navbar-smallscreen_overlay flex__center slide-bottom" initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:1}}>
            <MdCarpenter fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links" variants={itemsVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#services" onClick={() => setToggleMenu(false)}>Services</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;