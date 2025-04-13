import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Anil</h1>
            <p className={styles.description}>Highly motivated and adaptable Frontend Developer with foundational knowledge of backend development. A fast
                learner with a proven ability to work collaboratively in team environments, tackle challenges, and quickly adapt to
                new technologies and workflows. Passionate about continuous learning and leveraging innovative solutions to create
                seamless user experiences. </p>
            <a href="mailto:anilbandi210@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("profileImg.png")} alt="Hero image of me"  className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>
}