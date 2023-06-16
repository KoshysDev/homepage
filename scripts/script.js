window.addEventListener('load', function () {
    // Select the elements to animate
    var elements = document.querySelectorAll('.fade-in');

    // Apply the animation to each element
    elements.forEach(function (element) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s ease-in-out';

        // Trigger the animation when the element is in the viewport
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                element.style.opacity = 1;
                observer.unobserve(element);
            }
        }, { threshold: 0.5 });

        observer.observe(element);
    });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'scripts/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});