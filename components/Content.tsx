import styles from "@/styles/Home.module.scss";

export function ContentCenter() {
  return (
    <div className={`${styles.contentCenter} ml-1`}>
      <p>Hello World! I am a aspiring Web and Linux Developer.</p>
      <p>I&apos;m currently learning CSS and React with NextJS.</p>
    </div>
  );
}

export function ContentRight() {
  return (
    <div className={styles.contentRight}>
      <p>Hello World!</p>
    </div>
  );
}

export function ContentLeft() {
  return (
    <div className={styles.contentLeft}>
      <p>Hello World!</p>
    </div>
  );
}
