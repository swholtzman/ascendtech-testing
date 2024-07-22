

import { gsap } from 'gsap';

export const introAnimation = () => {
    const tl = gsap.timeline();

    tl.to(wordGroupsRef.current, {
        yPercent: -80,
        duration: 10,
        // ease: 'expo.inOut',
        ease: "power3.inOut",
    });
};

export const progressAnimation = (progressRef, overlayRef, progressNumberRef) => {
    const tl = gsap.timeline();

    tl.to(progressRef.current, {
        scaleX: 1,
        duration: 10,
        // ease: 'expo.inOut',
        ease: "power3.inOut",
    });


    tl.fromTo(overlayRef.current, {
        xPercent: -50 // starts with dark overlay fully visible
    }, {
        xPercent: 0, // moves overlay container to left; dark goes off-screen, light comes in
        duration: 10,
        // ease: 'expo.inOut',
        ease: "power3.inOut",
        onComplete: () => {
            // Optional: any action after animation completes
        }
    });
};
