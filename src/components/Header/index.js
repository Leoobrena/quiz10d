import Image from "next/image";

import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <Image src="/images/logo.webp" alt="logo" width={150} height={150} />
    </header>
  );
}
