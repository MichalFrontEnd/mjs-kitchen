
import styles from "./page.module.css";
import Link from 'next/link';

import { Nav } from '@/components/molecules/nav';

export default function Home() {

  return (
    <main className={styles.main}>

        <Nav />

    </main>
  );
}
