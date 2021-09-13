const navSlide = () => {
    const lines = document.querySelector('.Lines');
    const nav = document.querySelector('.NavLinks');
    const navlinks = document.querySelectorAll('.NavLinks li');

    lines.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navlinkfade o.5s ease forwards ${index / 7 + 2}s`
            }

        });

        lines.classList.toggle('toggle');

    });


}

navSlide();