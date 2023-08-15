import React, { useEffect } from 'react'
import styles from "./MouseGradient.module.css";
import { useMediaQuery } from "@mui/material";

const MouseGradient = () => {

    const isMobile = useMediaQuery("(max-width: 900px)");

    useEffect(() => {
        if (isMobile) {
            return;
        }

        const gradientDiv = document.querySelector('#mouse-gradient');
        const updateGradient = event => {
            const x = event.clientX;
            const y = event.clientY;
            // gradientDiv.style.background = `radial-gradient(400px at ${x}px ${y}px, hsla(186, 100%, 50%, 0.08), transparent 80%)`;
            gradientDiv.style.background = `radial-gradient(400px at ${x}px ${y}px, rgba(255, 255, 255, 0.05), transparent 80%)`;
        }
        document.addEventListener('mousemove', updateGradient);

        return () => {
            document.removeEventListener('mousemove', updateGradient);
        }
    }, [isMobile]);

    if (isMobile) return null;
    return <div id="mouse-gradient" class={styles.mouse_gradient_class} />
}

export default MouseGradient;
