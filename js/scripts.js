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
            const content = header.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                header.style.background = '#005bb5';
            } else {
                content.style.display = 'none';
                header.style.background = '#0073e6';
            }
        });
    });

    // Set default display for collapsible content
    document.querySelectorAll('.collapsible-content').forEach(content => {
        content.style.display = 'block';
    });
});
