import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function TopBar() {
  return (
    <>
      <div
        className={`${styles.flexContainer} ml-1 flex justify-between items-center`}
      >
        <div className={`${styles.logoContainer} mr-1`}>
          <h2 className="font-bold font text-xl">Rexhent App</h2>
        </div>
        <div
          className={`${styles.linksContainer} underline flex flex-row-reverse`}
        >
          <Link href="/">Home</Link>
          <a href="#">Blog</a>
          <a href="https://github.com/rexhent" target="_blank">
            GitHub
          </a>
          <a href="https://github.com/rexhent/portfolio-next" target="_blank">
            Source
          </a>
        </div>
      </div>
    </>
  );
}
