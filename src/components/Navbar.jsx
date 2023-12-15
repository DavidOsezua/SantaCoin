import React,{useState} from 'react'
import styles from "./Navbar.module.css"
import { logo,open,close } from '../assets'
import {navLinks} from "../data/data"
import NavLinks from './NavLinks'

const Navbar = () => {
  
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
      setToggle((prev) => !prev);
    };
  return (
<header className={`${styles.header}`}>
    <nav className={`${styles.navContainer}`}>
        <div>
            <img src={logo} className={`w-[40px]`}/>
        </div>


        <ul className={`${styles.navMenu} ${toggle && styles.showMenu}`}>
        <img src={close} onClick={toggleHandler} className={styles.toggle} />

          {navLinks.map(navlink=><NavLinks link={navlink} key={navlink.sectionId}/>)}
          <button className={styles.btn}>Buy Santacoin</button>
        </ul>

      
          <img src={open} onClick={toggleHandler} className={styles.openBtn}/>
        
    </nav>
</header> 
  )
}

export default Navbar