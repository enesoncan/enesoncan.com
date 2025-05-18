import Link from "next/link";

import Social from "../Social";
import styles from "./styles.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <span>Hey, I'm Enes.</span>
        <p>
          I graduated from the Computer Programming department at Çanakkale
          Onsekiz Mart University. I am currently working as a Front-End
          Developer at{" "}
          <Link href="https://www.blutv.com" target="_blank" style={{ textDecoration: "underline", fontWeight: "600" }}>
            BluTV
          </Link>
          . You can learn more about me on my LinkedIn profile.
        </p>
        <p>
          Outside of software, I enjoy chess, video games, nature walks, and
          traveling.
        </p>
      </div>
      <Link href="mailto:enesoncn@gmail.com" className={styles.button}>
        Send Mail
        <svg
          className="feather feather-mail"
          fill="none"
          width="16"
          height="16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2" />
          <path d="m22 6-10 7L2 6" />
        </svg>
      </Link>
      <Social />
    </div>
  );
};

export default Card;
