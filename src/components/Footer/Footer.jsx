import Social from '../Social/Social';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.inner} grid`}>
          <h2 className={`${styles.title} text-md`}>
            <span>
              get in touch
            </span>
          </h2>
          <Social />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
