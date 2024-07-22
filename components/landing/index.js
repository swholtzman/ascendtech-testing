import React from "react";

import styles from "./Landing.module.scss";

const Landing = () => {
    return (
        <div className={styles.landing__wrapper}>
            <div className={styles.landing__content}>
                <h1 className={styles.landing__title}>React Boilerplate</h1>
                <p className={styles.landing__description}>
                    A simple and lightweight boilerplate for React applications.
                </p>
            </div>
        </div>
    );
}

export default Landing;