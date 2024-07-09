import styles from "./page.module.css";
import Image from "next/image";
import mainImg from "@/assets/mj.jpg";
import Link from "next/link";


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
        <div className={styles.hero}>
          <h1>We are <span>Michal &amp; Joakim</span></h1>
          <h2>And this is our recipe collection</h2>
      <Link  href='/recipes' className={styles.cta}>To the foodz</Link>
        </div>
      </div>
    </main>
  );
}
