/* Add Recipe Page */
import styles from './page.module.css';
import { ImagePicker } from '@/components/molecules/image-picker'
import { InputField } from '@/components/molecules/input-field'

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
            <InputField name="title" required></InputField>
          </div>
          <div className={styles.row}>
            <InputField name="creator" required></InputField>
            <InputField name="source"></InputField>
          </div>
          <InputField type="textarea" name="ingredients" required></InputField>
          <InputField type="textarea" name="instructions" required></InputField>
          <ImagePicker label="" name='image'/>
          <p className={styles.actions}>
          <button type="submit" className='button-gradient'>Add Recipe</button>
          </p>
        </form>
      </main>
    </>
  );
}