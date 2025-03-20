"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
export default function Header() {
  const handleLogoClick = () => {
    ym(100153471, "reachGoal", "clickLogo");
  };

  return (
    <header className={styles.root}>
      <Link href={"/"} onClick={handleLogoClick}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={300}
          height={61}
          // fill
          priority
          unoptimized
        />
      </Link>
      <ul className={styles.list}>
        <li>
          <Link href={`/blog`}>Blog</Link>
        </li>
        <li>
          <Link href={`/404`}>404</Link>
        </li>
      </ul>
    </header>
  );
}
