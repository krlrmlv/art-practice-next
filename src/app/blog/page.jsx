import Card from "@/components/Card";
import Link from "next/link";
import styles from "./Blog.module.scss";

export default function BlogPage() {
  return (
    <fieldset>
      <legend>Blog page</legend>
      <ul>
        <li>
          <Link href={`/blog/1`}>Post 1</Link>
        </li>
      </ul>
      <div>
        <h2>Топ секция</h2>
        <div className={styles.topSection}>
          <Card large />
          <Card large />
        </div>
      </div>
      <div>
        <h2>Сетка</h2>
        <div className={styles.bottomSection}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </fieldset>
  );
}
