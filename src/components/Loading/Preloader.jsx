import gsap from 'gsap';
import { useEffect } from 'react';
import './Preloader.scss';

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
    });

    let counter = 1;
    let id;

    function move() {
      id = setInterval(load, 35);
    }

    function load() {
      if (counter >= 100) {
        clearInterval(id);
        tl.play();
      } else {
        counter++;
        document.querySelector(".preloader-percent span").innerHTML =
          counter + "%";
      }
    }

    move();

    tl
      .to(".preloader__text span", {
        y: 0,
        delay: 0.6,
        duration: 0.4,
        stagger: 0.15,
        ease: "Expo.easeIn",
      })
      .to(".preloader__text span", {
        y: -100,
        delay: 0.8,
        stagger: 0.1,
      })
      .to(".preloader-percent span", {
          y: "-150%",
          stagger: 0.1,
          ease: "Expo.easeInOut",
        },
        "+=1")
      .to(".preloader", {
          y: -2000,
          duration: 0.6,
          ease: "Expo.easeInOut",
        },
        "+=1");

    return () => {};
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-inner">
        <p className="preloader__text">
          <span>russia</span>
        </p>
        {/* <span className="preloader-separator"></span> */}
        <p className="preloader__text">
          <span>2023</span>
        </p>
      </div>
      <h2 className="preloader-percent">
        <span>
          0 <span>%</span>
        </span>
      </h2>
    </div>
  );
};

export default Preloader;
