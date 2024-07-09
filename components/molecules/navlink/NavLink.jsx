'use client';
import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }) {

  const path = usePathname();
  console.log('path: ', path);
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? styles.active : undefined}
    >
      {children}
    </Link>
  );
}

export default NavLink;
