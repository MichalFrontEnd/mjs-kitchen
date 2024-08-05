/* Add Recipe Page */
import styles from './page.module.css';
import { ImagePicker } from '@/components/molecules/image-picker'

export default function ShareMealPage() {
  return (
    <>
      <header className={styles.header}>
        <h1 >
          <span className={styles.highlight}>Add Recipe</span>
        </h1>
      </header>
      <main className={styles.main}>
        <form className={styles.form}>
          <div className={styles.row}>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          </div>
          <div className={styles.row}>
            <p>
              <label htmlFor="creator">Creator</label>
              <input type="text" id="creator" name="creator" required />
            </p>
            <p>
              <label htmlFor="source">Source</label>
              <input type="email" id="source" name="source" />
            </p>
          </div>
          <p>
            <label htmlFor="ingredients">Ingredients</label>
            <textarea type="textarea" id="ingredients" name="ingredients" rows="10" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="" name='image'/>
          <p className={styles.actions}>
          <button type="submit" className='button-gradient'>Add Recipe</button>
          </p>
        </form>
      </main>
    </>
  );
}