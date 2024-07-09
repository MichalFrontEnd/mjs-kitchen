import styles from "./nav.module.css";
import { NavLink } from "@/components/molecules/navlink";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        <li className={styles.navlistitem}>
          <NavLink href={"/recipes"}>Browse Recipes</NavLink>
        </li>
        <li className={styles.navlistitem}>
          <NavLink href={"/favorites"}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
