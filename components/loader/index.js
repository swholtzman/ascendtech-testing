import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { gsap } from "gsap";

import styles from "./Loader.module.scss";
import { introAnimation, progressAnimation } from "../loader/animations";

const Loader = ({ timeline }) => {
    const loaderRef = useRef(null);
    const progressRef = useRef(null);
    const progressNumberRef = useRef(null);
    const wordGroupsRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        timeline &&
            timeline
                .add(introAnimation(wordGroupsRef))
                .add(progressAnimation(progressRef, overlayRef, progressNumberRef), 0)
                // .add(collapseWords(loaderRef), "-=1");
    }, [timeline]);

    // useEffect(() => { } , []);

    return (
        <main className={styles.loader__main}>
            <div className={styles.loader__wrapper} ref={loaderRef}>
                <div className={styles.loader__progressWrapper}>
                    <div className={styles.loader__progress} ref={progressRef}></div>
                </div>
                <span className={styles.loader__progressNumber} ref={progressNumberRef}>
                    0%
                </span>

                <div className={styles.loader} ref={loaderRef}>
                    <div className={styles.loader__overlay} ref={overlayRef}>
                        <div className={styles.loader__overlayLight}></div>
                        <div className={styles.loader__overlayDark}></div>
                    </div>
                    <div className={styles.loader__text}>
                        <div className={styles.loader__weAre}>
                            <span>We are</span>
                        </div>
                        <div className={styles.loader__words}>

                            <div ref={wordGroupsRef} className={styles.loader__wordsGroup}>
                                {words.map((word, index) => {
                                    return (
                                        <span key={index} className={styles.loader__word}>
                                            {word}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );

};

export default Loader;