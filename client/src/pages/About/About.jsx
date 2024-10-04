import React from 'react';

import styles from '/about.module.css';  

const About = () => {
  return (
    <section className={styles.about-section}>
      <h2>About</h2>
      <h1>Evangadi Networks</h1>
      <p>
        No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.
      </p>
      <p>
        Whether you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.
      </p>
      <button className={styles.how-it-works-btn}>HOW IT WORKS</button>
      <div className={styles.design-shape}></div>
    </section>
  );
};
export default About;

