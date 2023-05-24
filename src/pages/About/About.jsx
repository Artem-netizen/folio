import TextReveal from "src/components/TextReveal/TextReveal";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <TextReveal />
      </div>
    </section>
  );
}

export default About;
