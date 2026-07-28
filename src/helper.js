import { useState, useEffect } from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            console.log("Intersecting: ", entry.isIntersecting)
            setIntersecting(entry.isIntersecting);
        },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
}