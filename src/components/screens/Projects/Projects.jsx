import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from './data'; 
import styles from './Projects.module.scss';

const Projects = () => {
  const refWork = useRef(null);
  const refTitle = useRef(null);
  const sepRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const dividers = gsap.utils.toArray(".separator");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });
    Array.prototype.forEach.call(dividers, (el) => {
      observer.observe(el);
    });
  }, [refWork]);

  return (
    <section className={styles.works} ref={refWork}>
      <div className="grid container">
        <div className={styles.inner}>
          <h2 className="subtitle">
            <span>works</span>
          </h2>
          <ul className={styles.list}>
            {projects.map((project) => (
              <li className={styles.item} key={project.id}>
                <Link
                  className={`${styles.link} grid-col-9`}
                  to={`/work/${project.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <h3 className={`${styles.title} text-md`} ref={refTitle}>
                    <span className={styles.first}>{project.title}</span>
                    <span className={styles.last}>{project.title}</span>
                  </h3>
                  <p className={styles.text}>
                    <span>{project.place}</span>
                  </p>
                  <span className={styles.icons}>
                    <span className={styles.icon}>
                      <svg width="24" height="24" fill="none">
                        <path
                          fill="#FCFCFC"
                          d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414Z"
                        />
                      </svg>
                    </span>
                    <span className={styles.icon}>
                      <svg width="24" height="24" fill="none">
                        <path
                          fill="#FCFCFC"
                          d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414Z"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
                <div className="separator" ref={sepRef}></div>
              </li>
            ))}
          </ul>
        </div>
        {/* <Work id={id} /> */}
      </div>
    </section>
  );
}

export default Projects;
