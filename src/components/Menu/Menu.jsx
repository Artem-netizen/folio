import { Link } from "react-router-dom";
import Social from "../Social/Social";
import "../Social/Social.module.scss";
import styles from "../Menu/Menu.module.scss";

const Menu = ({ navLinks, active, setActive, color = "#161616", fill = "#161616", size = "14px", gap = "5px" }) => {
  return (
    <div className={`${styles.menu} ${active ? styles.active : ""}`} onClick={() => setActive(false)}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.list}>
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link className={styles.link} to={item.href} onClick={() => window.scrollTo(0, 0)}>
                  <span>{item.name}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Social color={color} size={size} fill={fill} gap={gap} />
      </div>
    </div>
  );
};

export default Menu;
