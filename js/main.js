const projects = [
    {
        title: "Todo List",
        description: "A clean, minimal task management web app built with Flask. Designed to help you stay organised without the clutter — just add your tasks, track them, and get things done.",
        imageUrl: "./images/todo-list.jpg",
        liveUrl: "https://arden002.pythonanywhere.com/",
        codeUrl: "https://github.com/ramizhasan002/todo-list"
    },
    {
        title: "Weather CLI (Python)",
        description: "A simple yet robust command-line interface (CLI) tool built with Python to fetch and display real-time weather data from the OpenWeatherMap API.",
        imageUrl: "./images/weather-cli.jpg",
        liveUrl: "",
        codeUrl: "https://github.com/arden-codes/weather-cli"
    },

    {
        title: "Portfolio Project (This Website!)",
        description: "A responsive personal portfolio built from scratch using HTML, CSS, and vanilla JavaScript. Features a dynamic theme switcher and is populated by a JavaScript data structure.",
        imageUrl: "./images/profile-picture.jpg",
        liveUrl: "https://github.com/arden-codes/portfolio-project",
        codeUrl: "https://github.com/arden-codes/portfolio-project"
    }
];

const themeToggle = document.querySelector("#theme-toggle");
const htmlElement = document.documentElement;

const projectsContainer = document.querySelector('.projects-container');

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

const menuToggle = document.querySelector('.menu-toggle');

const nav = document.querySelector('header nav');


menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    menuToggle.classList.toggle('is-active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu when a nav link is tapped, so it doesn't stay open
// after the user has already navigated somewhere.
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', false);
    });
});


const renderProjects = () => {
    let allProjectsHTML = '';

    projects.forEach(project => {
        let projectCardHTML = ''

        if (project.liveUrl) {
            projectCardHTML = `
            <div class="project-card">
                <img src="${project.imageUrl}" alt="Screenshot of the ${project.title} project" class="project-image">
    
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
    
                <div class="project-links">
                    <a href="${project.liveUrl}" target="_blank">Live Demo</a>
                    <a href="${project.codeUrl}" target="_blank">View Code</a>
                </div>
            </div>
            `
        } else {
            projectCardHTML = `
            <div class="project-card">
                <img src="${project.imageUrl}" alt="Screenshot of the ${project.title} project" class="project-image">
            
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            
                <div class="project-links">
                    <a href="${project.codeUrl}" target="_blank">View Code</a>
                </div>
            </div>
            `
        }

        allProjectsHTML += projectCardHTML;
    });

    projectsContainer.innerHTML = allProjectsHTML;
};


themeToggle.addEventListener("click", (() => {
    const newTheme = themeToggle.checked ? 'dark' : 'light'; // This is a ternary operator

    // A ternary operator is a compact way of writing a simple if...else statement. Its syntax is: condition ? value_if_true : value_if_false

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}));


// IIFE (Immediately Invoked Function Expression) 
// syntax: (() => {})() Read notes-JS to learn more 

(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);

        if (savedTheme === 'dark') {
            themeToggle.checked = true;
        };
    };

})();

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // 1. Prevent the default form submission behavior (the page redirect).
            event.preventDefault();

            // 2. Collect the form data using the FormData API.
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('button[type="submit"]');

            // Provide immediate user feedback: show a "sending" state.
            formStatus.innerHTML = 'Sending...';
            formStatus.className = 'info'; // You could add an .info style for this
            formStatus.style.display = 'block';
            formStatus.style.opacity = 1;
            submitButton.disabled = true;

            // 3. Use the fetch API to send the data.
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    formStatus.innerHTML = "Thank you! Your message has been sent.";
                    formStatus.className = 'success';
                    contactForm.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            // This is a validation error from Formspree.
                            formStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            // This is a generic server error.
                            formStatus.innerHTML = "Oops! Something went wrong. Please try again later.";
                        }
                        formStatus.className = 'error';
                    })
                }
            }).catch(error => {
                formStatus.innerHTML = "Oops! A network error occurred. Please check your connection and try again.";
                formStatus.className = 'error';
            }).finally(() => {
                submitButton.disabled = false;
            });
        }); // contactForm addEvent
    }; // contactForm

    
});