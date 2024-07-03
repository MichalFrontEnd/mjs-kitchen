import styles from "./page.module.css";
import Image from "next/image";
import mainImg from "@/assets/mj.jpg";

import { Nav } from "@/components/molecules/nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.polaroid}>
          <Image
            src={mainImg.src}
            width={300}
            height={300}
            alt='m&j in Malaga'
            className={styles.mainimg}
          />
        </div>
      <div className={styles.description}>
        <h1>We are Michal & Joakim</h1>
        <h2>And this is our recipe collection</h2>
      </div>
      </div>
      <Nav />
    </main>
  );
}
