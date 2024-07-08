import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { MainHeaderGradient } from "./";
import styles from "./main-header.module.css";

export function MainHeader() {
  return (
    <>
      <MainHeaderGradient />
      <header className={styles.header}>
        <Link
          href='/'
          className={styles.logo}
        >
          <Image
            alt='m&j in Malaga logo'
            src={logoImg}
            priority
          />
          <h1 className={styles.heading}>MJ&apos;s Kitchen</h1>
        </Link>
      </header>
    </>
  );
}

export default MainHeader;
