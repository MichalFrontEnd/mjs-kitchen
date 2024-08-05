"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./image-picker.module.css";

export function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  const handlePickerClick = () => {
    imageInput.current.click();
  };
  const handleImageChange = (e) => {
    const image = e.target.files[0];

    if (!image) {
        setPickedImage(pickedImage || null);
      return;
    }

    const fr = new FileReader();

    fr.onload = () => {
      setPickedImage(fr.result);
    };

    fr.readAsDataURL(image);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>Please select an image.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt='Your food pic'
              fill
            />
          )}
        </div>
        <input
          type='file'
          id={name}
          className={styles.input}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
            className={styles.button}
            type='button'
            onClick={handlePickerClick}
        >
            Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
