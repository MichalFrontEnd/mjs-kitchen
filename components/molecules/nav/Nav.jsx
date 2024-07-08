import Link from "next/link";
import styles from "./nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li className={styles.navlistitem}>
          <Link href='/recipes' className={styles.navlink}>Browse by Meal Type</Link>
        </li>
        <li className={styles.navlistitem}>
          <Link href='/recipes' className={styles.navlink}>Browse by Protein</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
