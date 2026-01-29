document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    document.querySelectorAll('.gallery-grid img').forEach(img => {
        img.addEventListener('click', function() {
            const fullSrc = this.getAttribute('data-full') || this.src;
            lightboxImg.src = fullSrc;
            lightbox.style.display = 'flex';
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});