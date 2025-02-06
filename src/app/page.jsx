import Image from "next/image";

import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.root}>
      main page

      <Image
        src="https://masterpiecer-images.s3.yandex.net/b2d91936767a11eeb11ee6d39d9a42a4:upscaled"
        placeholder="data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2VlZSIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIG9mZnNldD0iNTAlIiAvPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWVlIiBvZmZzZXQ9IjcwJSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2VlZSIgLz4KICA8cmVjdCBpZD0iciIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNTAiIHRvPSI1MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiICAvPgo8L3N2Zz4="
        alt="Picture of the author"
        width={800}
        height={400}
      />
    </div>
  );
}
