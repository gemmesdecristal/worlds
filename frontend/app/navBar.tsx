import Link from "next/link";
import styles from "@/app/styles.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link href="/character" className={styles.link}>
        Character
      </Link>
      <Link href="/inventory" className={styles.link}>
        Inventory
      </Link>
      <Link href="/town" className={styles.link}>
        Town
      </Link>
    </div>
  );
};
