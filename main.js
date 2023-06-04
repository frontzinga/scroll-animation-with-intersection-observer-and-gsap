document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const handleIntersection = (entries) => {
        entries.map((entry) => {
            const img = entry.target.querySelector('img');
            const circle = entry.target.querySelector('.circle');
            const title = entry.target.querySelector('.title');
            const underline = entry.target.querySelector('.underline');
            const lines = entry.target.querySelectorAll('p span');

            const tl = gsap.timeline();

            tl.fromTo(
                img,
                { x: '-150%', rotate: -360, scale: 0.5, duration: 0.5 },
                { x: 0, scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(1.5)' }
            );
            tl.fromTo(
                circle,
                { y: '100%', opacity: 0, duration: 0.5 },
                { y: 0, opacity: 1, duration: 0.5 },
                0
            );
            tl.fromTo(
                title,
                { yPercent: 150, opacity: 0, ease: 'power4', duration: 0.3 },
                { yPercent: 0, opacity: 1, ease: 'power4', duration: 0.3 }
            );
            tl.fromTo(
                underline,
                { width: 0, ease: 'power4', duration: 0.3 },
                { width: '100%', ease: 'power4', duration: 0.3 }
            );
            tl.fromTo(
                Array.from(lines),
                { opacity: 0, x: 100, stagger: { each: 0.1 }, ease: 'power4', duration: 0.5 },
                { opacity: 1, x: 0, stagger: { each: 0.1 }, ease: 'power4', duration: 0.5 }
            );

            if (entry.isIntersecting) {
                tl.play();
            } else {
                tl.reverse(0);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
    });

    sections.forEach((section) => observer.observe(section));
});
