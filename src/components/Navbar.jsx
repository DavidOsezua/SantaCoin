import { useState } from "react";
import styles from "./Navbar.module.css";
import { logo, open, close } from "../assets";
import { navLinks } from "../data/data";
import NavLinks from "./NavLinks";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { open: openModal } = useWeb3Modal();
  const { isConnected, address } = useAccount();

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.navContainer}`}>
        <div>
          <img src={logo} className={`w-[40px]`} />
        </div>

        <ul className={`${styles.navMenu} ${toggle && styles.showMenu}`}>
          <img src={close} onClick={toggleHandler} className={styles.toggle} />

          {navLinks.map((navlink) => (
            <NavLinks link={navlink} key={navlink.sectionId} />
          ))}
          {isConnected ? (
            <button
              className={styles.btn}
              onClick={() => openModal({ view: "Account" })}
            >{`${address.slice(0, 5)}...${address.slice(-5)}`}</button>
          ) : (
            <button className={styles.btn} onClick={openModal}>
              Connect Wallet
            </button>
          )}
        </ul>

        <img src={open} onClick={toggleHandler} className={styles.openBtn} />
      </nav>
    </header>
  );
};

export default Navbar;
