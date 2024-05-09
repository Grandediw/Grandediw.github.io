document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Collapsible Sections
    document.querySelectorAll('section h2').forEach(header => {
        header.addEventListener('click', function () {
            const section = header.nextElementSibling;
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        });
    });
});
