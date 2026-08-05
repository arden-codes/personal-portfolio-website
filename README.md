# Arden Codes | Portfolio Website

A responsive personal portfolio website built from scratch with vanilla HTML, CSS, and JavaScript. Features a sticky auto-hiding navbar, light/dark theme switcher, a JS-driven project showcase, and a working contact form.

**Live Demo:** https://ardencodes.netlify.app/

**Repository:** https://github.com/arden-codes/portfolio-project

---

## Features

- **Responsive design** — adapts across desktop, tablet, and mobile breakpoints
- **Light/dark theme switcher** — toggle persists across visits via `localStorage`
- **Mobile hamburger menu** — animated toggle with a slide-down navigation panel
- **Dynamic project cards** — rendered from a single JS data array, so adding a new project is a one-line change
- **Working contact form** — submits via [Formspree](https://formspree.io/) with inline success/error feedback, no page reload

## Tech Stack

- HTML5
- CSS3 (custom properties / CSS variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- [Formspree](https://formspree.io/) for form handling

No frameworks, no build step — just open and go.

## Project Structure

```
portfolio-project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── profile-picture.jpg
└── README.md
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/arden-codes/portfolio-project.git
   cd portfolio-project
   ```
2. Open `index.html` in your browser — no build tools or dependencies required.

### Setting up the contact form

The form currently posts to a Formspree endpoint. To use your own:
1. Create a free form at [formspree.io](https://formspree.io/)
2. Replace the `action` attribute on the `<form id="contact-form">` element in `index.html` with your own Formspree endpoint URL

## Customizing Projects

Projects are rendered from the `projects` array at the top of `js/main.js`. To add or edit a project, just update the array:

```javascript
{
    title: "Project Name",
    description: "A short description of the project.",
    imageUrl: "path/to/screenshot.jpg",
    liveUrl: "https://your-live-demo-link.com", // leave as "" if there's no live demo
    codeUrl: "https://github.com/your-username/repo"
}
```

## Browser Support

Built with modern CSS (custom properties, `min()`, `aspect-ratio`) and JS (ES6+, `fetch`). Works in all current versions of Chrome, Firefox, Safari, and Edge.

## Connect

- [GitHub](https://github.com/arden-codes)
- [LinkedIn](https://www.linkedin.com/in/arden-codes/)
- [X (Twitter)](https://x.com/ardencodes)
- [Instagram](https://www.instagram.com/arden.codes/)

## License

This project is open source and available for personal reference. Feel free to fork it, but please don't pass it off as your own portfolio.
