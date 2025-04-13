import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {

    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to react out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("emailIcon.png")} alt="Email Icon" />
                <a href="mailto:anilbandi210@gmail.com">anilbandi210@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("linkedinIcon.png")} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/anil-bandi-b7744a259/">linkedin.com/anilbandi</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/anilbandi1012">github.com/anilbandi</a>
            </li>
        </ul>
    </footer>

}