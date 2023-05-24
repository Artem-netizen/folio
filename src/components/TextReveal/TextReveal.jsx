import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import styles from "../../pages/About/About.module.scss";

const TextReveal = (start) => {
  const [lettersRef, setlettersRef] = useArrayRef();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline();
    if (!start) return;
    tl.to(lettersRef.current, 4, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 1,
        start: "top 13%",
        end: "bottom bottom",
      },
      color: "#fcfcfc",
      stagger: 1,
    });

    return () => {
      return () => tl.kill();
    };
  }, [lettersRef, start]);

  let textAboutReveal =
    "Hi! I have been developing sites and interfaces for over 2 years. Prior to that, he studied as a system programmer. During my work, I happened to work with large companies and small organizations, as well as a freelancer and remote developer in the agency. I like to create interesting, attention-grabbing user interfaces that are tied to good animations. I am open to new projects, so feel free to email or social media me. See you later!";

  return (
    <div ref={triggerRef}>
      <p className={`${styles.text} title`}>
        {textAboutReveal.split("").map((letter, idx) => (
          <span className={styles.reveal} ref={setlettersRef} key={idx}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TextReveal;
