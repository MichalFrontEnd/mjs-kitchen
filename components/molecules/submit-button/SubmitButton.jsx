"use client";
import { useFormStatus } from "react-dom";
import styles from "./submit-button.module.css";

export function SubmitButton({ title }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`${styles["submit-button"]} button-gradient`}
    >
      {" "}
      {pending ? "Submitting..." : title}
    </button>
  );
}

export default SubmitButton;
