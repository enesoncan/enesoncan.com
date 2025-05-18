import Link from "next/link";

import styles from "./styles.module.css";

const Social = () => {
  return (
    <div className={styles.social}>
      <Link
        href="https://www.linkedin.com/in/enesoncan/"
        target="_blank"
        className={styles.link}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path
            d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5M17 20v19h-6V20zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53M39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26z"
            transform="scale(5.12)"
            fill="currentColor"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          />
        </svg>
      </Link>
      <Link
        href="https://github.com/enesoncan"
        target="_blank"
        className={styles.link}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path
            d="M36 12c13.255 0 24 10.745 24 24 0 10.656-6.948 19.685-16.559 22.818l.007-.022s-1.62-.759-1.586-2.114c.038-1.491 0-4.971 0-6.248 0-2.193-1.388-3.747-1.388-3.747s10.884.122 10.884-11.491c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-.426-6.812c-1.856-.2-5.18 1.774-6.6 2.697 0 0-2.25-.922-5.991-.922-3.742 0-5.991.922-5.991.922-1.419-.922-4.744-2.897-6.6-2.697-1.656 2.029-.426 6.812-.426 6.812s-2.342 2.332-2.342 6.812c0 11.613 10.884 11.491 10.884 11.491s-1.097 1.239-1.336 3.061c-.76.258-1.877.576-2.78.576-2.362 0-4.159-2.296-4.817-3.358-.649-1.048-1.98-1.927-3.221-1.927-.817 0-1.216.409-1.216.876s1.146.793 1.902 1.659c1.594 1.826 1.565 5.933 7.245 5.933.617 0 1.876-.152 2.823-.279-.006 1.293-.007 2.657.013 3.454.034 1.355-1.586 2.114-1.586 2.114l.007.022C18.948 55.685 12 46.656 12 36c0-13.255 10.745-24 24-24"
            transform="scale(3.55556)"
            fill="currentColor"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          />
        </svg>
      </Link>
      <Link
        href="https://codepen.io/enesoncan"
        target="_blank"
        className={styles.link}
      >
        <svg
          className="feather feather-codepen"
          fill="none"
          height="24"
          width="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m12 2 10 6.5v7L12 22 2 15.5v-7zm0 20v-6.5" />
          <path d="m22 8.5-10 7-10-7" />
          <path d="m2 15.5 10-7 10 7M12 2v6.5" />
        </svg>
      </Link>
    </div>
  );
};

export default Social;
