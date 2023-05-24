import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutDesc.module.scss";

const Works = (run) => {
  gsap.registerPlugin(ScrollTrigger);
  const [lettersRef, setlettersRef] = useArrayRef();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (!run) {
      return
    }
    tl.to(lettersRef.current, 4, {
      scrollTrigger: {
        trigger: ref.current,
        scrub: 3.5,
        start: "top 50%",
        end: "bottom bottom",
      },
      duration: .6,
      color: "#fcfcfc",
      stagger: 1,
    });

  }, [lettersRef, ref, run]);

  let txt =
    "Im turning design into a tangible digital product that people around the world use.";

  return (
    <section className={styles.desc} ref={ref}>
      <div className="container">
        <div className="grid">
          <h2 className={`${styles.title} text-md`}>
            <p className={styles.text}>
              {txt.split("").map((letters, idx) => (
                <span ref={setlettersRef} key={idx}>
                  {letters}
                </span>
              ))}
            </p>
          </h2>
          <Link
            className="btn"
            to={`/about`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="btn-text">
              <span>About</span>
              <span>About</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
