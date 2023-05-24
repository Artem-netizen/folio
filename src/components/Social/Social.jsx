/* eslint-disable react/prop-types */
import { socialList } from './data';
import styles from './Social.module.scss';

const Social = ({color, fill, size, gap}) => {
  return (
    <ul className={styles.social} style={{gap}}>
      {socialList.map((item, idx) => (
        <li className={styles.item} key={`socialList item ${idx}`}>
          <a className={styles.link} href={item.link} style={{color, size}} target="_blank" rel="noreferrer">
            <span>{item.name}</span>
            <span className={styles.icons}>
              <span className={styles.icon}>
                <svg width="24" height="24" fill="none">
                  <path style={{fill}} fill="#FCFCFC" d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414Z"/>
                </svg>
              </span>
              <span className={styles.icon}>
                <svg width="24" height="24" fill="none">
                  <path style={{fill}} fill="#FCFCFC" d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414Z"/>
                </svg>
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
