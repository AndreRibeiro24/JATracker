import ProfileImage from "../assets/Image-TM.jpg";
import styles from "../css/TmStyle.module.css";
import ProfileLogo from "../assets/Logo-TM.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Avatar() {
  return (
    <main>
      <section className={styles.main}>
        <article className={styles.partOne}>
          <h1 className={styles.h1}>Theodoros Mitropoulos</h1>
          <p className={styles.p}>Full Stack Developer</p>
          <p className={styles.p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley, the
            librarian at St Bride Printing Library in London, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letraset's Body
            Type sheets. It has survived not only many decades, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised thanks to these sheets and more recently with
            desktop publishing software including versions of Lorem Ipsum.
          </p>
          <aside className={styles.linkOne}>
            <a
              href="https://github.com/Theodor-gif"
              target="_blank"
              className="gap-5 w-full text-md"
            >
              <div className=" flex items-center justify-left">
                <FaGithub className="h-13 w-13" />
              </div>
              Theodoros Mitropoulos GitHub
            </a>
          </aside>
          <aside className={styles.linkOne}>
            <a
              href="https://www.linkedin.com/in/theodoros-mitropoulos-a101a8247/"
              target="_blank"
              className="gap-5 w-full text-md"
            >
              <div className=" flex items-center justify-left">
                <FaLinkedin className="h-13 w-13" />
              </div>
              Theodoros Mitropoulos LinkedIn
            </a>
          </aside>
        </article>
        <article className={styles.partTwo}>
          <img className={styles.img} width="250" src={ProfileImage} />
          <img className={styles.logo} width="30" src={ProfileLogo} />
          <h2 className={styles.name}>Theodoros Mitropoulos</h2>
        </article>
      </section>
    </main>
  );
}

export default Avatar;
