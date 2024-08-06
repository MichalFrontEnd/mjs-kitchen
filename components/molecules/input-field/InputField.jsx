import styles from './input-field.module.css';

export function InputField({ type = "text", name, required = false }) {
  const capitalize = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1) || '';
  };

  return (
    <p className={styles.input}>
      <label htmlFor={name}>{capitalize(name)}</label>
      {type === "textarea" ? (
        <textarea id={name} name={name} required={required} rows="10"></textarea>
      ) : (
        <input type={type} id={name} name={name} required={required} />
      )}
    </p>
  );
}

export default InputField;
