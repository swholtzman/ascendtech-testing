

import { gsap } from 'gsap';

export const introAnimation = (wordGroupsRef) => {
    const tl = gsap.timeline();

    tl.to(wordGroupsRef.current, {
        yPercent: -80,
        duration: 10,
        // ease: 'expo.inOut',
        ease: "power3.inOut",
    });

    return tl;
};

export const progressAnimation = (progressRef, overlayRef, progressNumberRef) => {
    const tl = gsap.timeline();

    // progress bar filling up
    tl.to(progressRef.current, {
        scaleX: 1, // scale to full width
        duration: 10,
        ease: "power3.inOut",
    }, 0); // start at time = 0 in timeline

    // animate overlay transition from dark to light
    tl.fromTo(overlayRef.current, {
        xPercent: -50 // starts with dark overlay fully visible
    }, {
        xPercent: 0, // movrs overlay container to left; dark goes off-screen, light comes in
        duration: 10,
        ease: "power3.inOut",
        onComplete: () => {
            // Do Nothing
        }
    }, 0); // start at time = 0 in timeline

    // animate progress number from 0 to 100
    tl.to(progressNumberRef.current, {
        innerHTML: 100,
        duration: 10,
        ease: "power3.inOut",
        roundProps: "innerHTML", // round values to integers
        onUpdate: () => {
            progressNumberRef.current.textContent = Math.round(gsap.getProperty(progressNumberRef.current, "innerHTML"));
        }
    }, 0); // start at time = 0 in timeline

    return tl;
};

