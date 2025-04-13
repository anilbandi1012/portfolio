import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () =>{
    return <section className={styles.container} id="about" >
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("aboutImage.png")} alt="me sitting with laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("cursorIcon.png")} alt="cursor"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend Developer with experience in building optimized sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("serverIcon.png")} alt="server"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience in developing back-end systems</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("uiIcon.png")} alt="ui"/>
                <div className={styles.aboutItemText}>
                    <h3>Machine Learning</h3>
                    <p>I have experience in training ML models</p>
                </div>
            </li>
        </ul>
        </div>

    </section>
}