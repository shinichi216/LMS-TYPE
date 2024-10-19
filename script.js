document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('course-list');

    const courses = [
        { title: 'HTML Basics', description: 'Learn the basics of HTML.' },
        { title: 'CSS Fundamentals', description: 'Get started with CSS.' },
        { title: 'JavaScript Essentials', description: 'Understand the basics of JavaScript.' }
    ];

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';
        courseDiv.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
        courseList.appendChild(courseDiv);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert(`Thank you, ${document.getElementById('name').value}! We will get back to you soon.`);
        contactForm.reset();
    });
});