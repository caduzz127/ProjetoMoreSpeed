document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (!header) return;

    const headerOffset = header.offsetTop;

    const onScroll = () => {
        if (window.pageYOffset > headerOffset) {
            if (!header.classList.contains('fixed')) {
                header.classList.add('fixed');
                document.body.style.paddingTop = header.offsetHeight + 'px';
            }
        } else {
            if (header.classList.contains('fixed')) {
                header.classList.remove('fixed');
                document.body.style.paddingTop = '';
            }
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    window.addEventListener('resize', () => {
        if (header.classList.contains('fixed')) {
            document.body.style.paddingTop = header.offsetHeight + 'px';
        }
    });

    onScroll();
});