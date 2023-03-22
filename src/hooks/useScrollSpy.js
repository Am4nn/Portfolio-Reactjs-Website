import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

const useScrollSpy = (sections, offset = 0) => {
    const [currentSection, setCurrentSection] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset + offset;
            const currentSection = sections.find((section) => {
                const sectionElement = document.getElementById(section);
                if (!sectionElement) return false;
                const sectionTop = sectionElement.offsetTop - offset;
                const sectionBottom = sectionTop + sectionElement.offsetHeight;
                return sectionTop <= currentPosition && sectionBottom > currentPosition;
            });

            setCurrentSection(currentSection ? currentSection : null);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections, offset, location]);

    return currentSection;
};

export default useScrollSpy;