import classNames from "classnames";
import styles from "./Card.module.scss";
export default function Card({ large, title }) {
  return (
    <article className={classNames(styles.root, { [styles.large]: large })}>
      <img
        src="https://masterpiecer-images.s3.yandex.net/b2d91936767a11eeb11ee6d39d9a42a4:upscaled"
        alt="картинка"
        className={styles.img}
      />
      <h3 className={styles.title}>{title || 'Заголовок'}</h3>
      <p className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt est
        exercitationem error incidunt esse!
      </p>
    </article>
  );
}
