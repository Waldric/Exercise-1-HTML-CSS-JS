function highlightSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.remove('highlight-section');
    void section.offsetWidth; 
    section.classList.add('highlight-section');
    section.addEventListener('animationend', function handler() {
        section.classList.remove('highlight-section');
        section.removeEventListener('animationend', handler);
    });
}

document.getElementById('portfolioTab').addEventListener('click', function() {
    highlightSection('projects');
});

document.getElementById('contactTab').addEventListener('click', function() {
    highlightSection('contact');
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting me!');
});

const projectTitles = document.querySelectorAll('#projects .card-title');
const projectsSection = document.getElementById('projects');
const colors = ['#ffcabe', '#e8f0fe', '#caffbf', '#ffd6e0', '#fff3b0', '#b5ead7'];
let colorIndex = 0;

projectTitles.forEach(function(title) {
    title.addEventListener('click', function() {
        projectsSection.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
});