import { useEffect } from "react";

const useScrollToCurrentHash = loading => {

    useEffect(() => {
        if (loading) return;

        if (window.location.hash) {
            // location.hash without the '#'
            const id = window.location.hash.substring(1);
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView();
                    el.focus();
                }
            }, 0);
        }
    }, [loading]);

}

export default useScrollToCurrentHash;
