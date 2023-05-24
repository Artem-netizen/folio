import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";
import styles from "./Intro.module.scss";

const Intro = () => {
  useEffect(() => {
    const ino = gsap.timeline();
    const revealSpans = gsap.utils.toArray('.intro-txt').forEach((rev) => {
      ino.to(rev, {
        y: 0,
        opacity: 1,
        stagger: .04,
        duration: .2,
      });
    });

    return () => {
      return () => revealSpans.kill();
    };
  }, []);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0,- 1300]);

  return (
    <section className={styles.intro} id="intro">
      <div className={`${styles.inner} container`}>
        <h1 className={`${styles.title} title`}>
          <span className={styles.txt}>
            <span className="intro-txt">artyom</span>
            <span className="intro-txt">titov</span>
            <span className="intro-txt">creative</span>
            <span className="intro-txt">markup</span>
            {/* artyom titov creative markup */}
          </span>
          <span className={styles.last}>
            <span className="intro-txt">dev.</span>
          </span>
        </h1>
        <motion.h2 className={`title intro-txt ${styles.bottom}`} style={{ x }}>
          <span>development& animations 2021 &2023</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default Intro;
