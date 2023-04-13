import styles from "../styles/Home.module.css";

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
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="https://github.com/rexhent" target="_blank">
            GitHub
          </a>
          <a href="#">Source</a>
        </div>
      </div>
    </>
  );
}
