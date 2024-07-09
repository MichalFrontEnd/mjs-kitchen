import Link from "next/link";
import styles from "./nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li className={styles.navlistitem}>
          <Link href='/recipes' className={styles.navlink}>Browse Recipes</Link>
        </li>
        <li className={styles.navlistitem}>
          <Link href='/recipes' className={styles.navlink}>Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
