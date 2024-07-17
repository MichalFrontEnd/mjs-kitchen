import styles from "./recipe-card.module.css";
import Image from 'next/image';
import Link from 'next/link';

export function RecipeCard({title, slug, image, creator, tags }) {
  return (
    <article className={styles["recipe-card"]}>
        <header>
        <div className={styles.image}>
          {/* ToDo: add fallback image */}
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles["header-text"]}>
          {/* Creator as conditional link */}
          {/* Add favorites functionality */}
          <h2>{title}<span>⭐</span></h2>
          <p>by {creator}</p> 
        </div>
      </header>
      <div className={styles.content}>
        {/* list of tags that will be links? */}
        <p className={styles.tags}>{tags}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>To full Recipe</Link>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
