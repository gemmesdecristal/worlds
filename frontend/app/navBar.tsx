import Link from "next/link";
import styles from "@/app/styles.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link href="/game/gameId/character" className={styles.link}>
        Character
      </Link>
      <Link href="/game/gameId/inventory" className={styles.link}>
        Inventory
      </Link>
      <Link href="/game/gameId/town" className={styles.link}>
        Town
      </Link>
    </div>
  );
};
