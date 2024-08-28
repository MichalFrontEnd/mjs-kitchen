/* Add-Recipe Page */
"use client";

import styles from "./page.module.css";
import { ImagePicker } from "@/components/molecules/image-picker";
import { InputField } from "@/components/molecules/input-field";
import { SubmitButton } from "@/components/molecules/submit-button";
import { IconWithText } from "@/components/atoms/icon";
import { uploadRecipe } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(uploadRecipe, { message: null });
  return (
    <>
      <header className={styles.header}>
        <h1>
          <span className={styles.highlight}>Add Recipe</span>
        </h1>
      </header>
      <main className={styles.main}>
        <form
          className={styles.form}
          action={formAction}
        >
          <div className={styles.row}>
            <InputField
              name='title'
              required
            ></InputField>
          </div>
          <div className={styles.row}>
            <InputField
              name='creator'
              required
            ></InputField>
            <InputField name='source'></InputField>
          </div>
          <InputField
            type='textarea'
            name='ingredients'
            required
          ></InputField>
          <InputField
            type='textarea'
            name='instructions'
            required
          ></InputField>
          <ImagePicker
            label=''
            name='image'
          />
          {state.message && 
          <div className={styles.error}>
            <IconWithText
              icon='triangle-exclamation'
              type='solid'
            >
              <p>{state.message}</p>
            </IconWithText>
          </div>
         } 
          <p className={styles.actions}>
            <SubmitButton title='Add Recipe' />
          </p>
        </form>
      </main>
    </>
  );
}
