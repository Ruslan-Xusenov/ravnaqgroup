document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelectorAll('.cta-button');

    function triggerHaptic(pattern = 12) {
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
            try {
                navigator.vibrate(pattern);
            } catch (e) {
            }
        }
    }

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            triggerHaptic(20);
        });
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        let isTicking = false;
        window.addEventListener('scroll', () => {
            if (!isTicking) {
                requestAnimationFrame(() => {
                    const heroGroup = document.getElementById('hero-group');
                    if (heroGroup) {
                        const scrollY = window.scrollY;
                        heroGroup.style.transform = `translate3d(0, ${scrollY * 0.06}px, 0)`;
                    }
                    isTicking = false;
                });
                isTicking = true;
            }
        }, { passive: true });
    }
});
