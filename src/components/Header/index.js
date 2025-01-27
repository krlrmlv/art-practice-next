'use client'

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        // fill
        priority
        unoptimized
      />
      <ul>
        <li>
          <Link href={`/blog`}>Blog</Link>
        </li>
      </ul>
    </header>
  );
}
