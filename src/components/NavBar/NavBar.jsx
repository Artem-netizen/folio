import { useState } from 'react';
import Menu from '../Menu/Menu';
import styles from '../Menu/Menu.module.scss';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const navLinks = [
    {
      name: "index",
      href: "/",
    },
    {
      name: "about",
      href: "/about",
    },
  ];

  return (
    <div className={styles["menu-fixed"]}>
      <button
        className={`${styles.button} ${menuActive ? styles.active : ""}`}
        type="button"
        onClick={() => setMenuActive(!menuActive)}
        aria-label="Open/Close menu"
      >
        <span>menu</span>
        <span>close</span>
      </button>
      <Menu navLinks={navLinks} active={menuActive} setActive={setMenuActive} />
    </div>
  );
}

export default NavBar;
