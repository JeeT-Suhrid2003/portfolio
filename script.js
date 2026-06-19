// Smooth Fade-in effect on scroll
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".data-scroll");

    // Add the fade-in utility class programmatically
    scrollElements.forEach((el) => {
        el.classList.add("fade-in");
    });

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.15)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    // Trigger once initially in case elements are already in view
    handleScrollAnimation();
});