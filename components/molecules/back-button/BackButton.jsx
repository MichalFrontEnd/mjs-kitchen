'use client'
import styles from "./back-button.module.css";
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter()
    return (
      <button type="link" className={styles["back-button"]} onClick={() => router.back()}> Back
    </button>
    );
  }
  
  export default BackButton;