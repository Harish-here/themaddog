import React from 'react';
import Image from 'next/image';
import styles from './BackgroundImage.module.css'; // Import the CSS module

const BackgroundImage = ({ imageUrl }) => {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src={imageUrl}
        alt='Background Image'
        layout='fill' // Fills the entire container
        objectFit='cover'
        quality={80} // Scales the image to cover while maintaining aspect ratio
      />
    </div>
  );
};

export default BackgroundImage;
