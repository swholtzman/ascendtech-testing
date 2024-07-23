"use client";

import React, { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Loader from "../components/loader";
import Landing from "../components/landing";

export default function Home() {

    const [loaderFinished, setLoaderFinished] = useState(false);
    const [timeline, setTimeline] = useState(null);


    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () =>
                    setLoaderFinished(true),
            });

            setTimeline(tl);

        });

        return () => context.revert();
    }, []);




    return (
        <main>
            {loaderFinished ? <Landing /> : <Loader timeline={timeline} />}
        </main>
    );
}
