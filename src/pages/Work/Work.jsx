import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { list } from "./data";
import s from "./Work.module.scss";

const Work = () => {
  gsap.registerPlugin(ScrollTrigger);

  const refs = useRef(new Set());
  const ref = e => e && refs.current.add(e);

  const { id } = useParams();
  const worksObjects = list.filter((val) => val.id === parseInt(id));
  
  useEffect(() => {
    const wk = gsap.timeline();

    refs.current.forEach(rev => {
      wk.to(rev, {
        y: 0,
        stagger: .3,
        duration: .7,
      });
    })


    return () => {
      return () => ref.kill();
    };
  }, [refs]);

  return (
    <section className={s.work}>
      {worksObjects.map((obj) => (
        <div className="container" key={obj.id}>
          <div className={`${s.top} grid`}>
            <Link className={s.back} to={`/`}>
              <span ref={ref}>
                <span>back to works</span>
                <span className={s.icon}>
                  <span>
                    <svg width="24" height="24" fill="none">
                      <path
                        fill="#FCFCFC"
                        d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414Z"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg width="24" height="24" fill="none">
                      <path
                        fill="#FCFCFC"
                        d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414Z"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </Link>
            <h1 className={`${s.title} title`}>
              <span ref={ref}>{obj.name}</span>
            </h1>
            <a
              className={s.link}
              href={obj.link}
              target="_blank"
              rel="noreferrer"
            >
              <span ref={ref}>
                <span>live site</span>
                <svg width="24" height="24" fill="none">
                  <path
                    fill="#FCFCFC"
                    d="m16.004 9.414-8.607 8.607-1.414-1.414L14.59 8H7.003V6h11v11h-2V9.414Z"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className={`${s.gallery} grid`}>
            {Object.values(obj.images).map((imgs, idx) => (
              <div className={s.image} key={`${idx}`}>
                <img src={imgs.img} alt={imgs.name} loading="lazy" />
              </div>
            ))}
          </div>
          <div className={`${s.info} grid`}>
            <p className={s.text}>{obj.text}</p>
            <ul className={s.list}>
              <li>
                <p>(role)</p>
                <p>markup developer</p>
              </li>
              <li>
                <p>(year)</p>
                <p>{obj.year}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Work;
