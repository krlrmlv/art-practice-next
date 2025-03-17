'use client'

import Image from "next/image";
import Link from "next/link";

export default function Header() {

  const handleLogoClick = () => {
    ym(100153471, 'reachGoal', 'clickLogo')
  }

  return (
    <header>
      <Link href={'/'} >
        <button onClick={handleLogoClick} >
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            // fill
            priority
            unoptimized
          />
        </button>
      </Link>
      <ul>
        <li>
          <Link href={`/blog`}>Blog</Link>
          <br />
          <Link href={`/404`}>404</Link>
        </li>
      </ul>
    </header>
  );
}
