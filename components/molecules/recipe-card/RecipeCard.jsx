import styles from "./recipe-card.module.css";
import Image from 'next/image';
import Link from 'next/link';

export function RecipeCard() {
  return (
    <article className={styles[recipe-card]}>
        <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles[header-text]}>
          <h2>{title}</h2>
          <p>by {creator}</p> 
        </div>
      </header>
      <div className={styles.content}>
        {/* list of tags that will be links? */}
        <p className={styles.tags}>{tags}</p>
        <div className={styles.link}>
          <Link href={`/meals/${slug}`}>To full Recipe</Link>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
