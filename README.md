# Venkat Ram — Portfolio

A responsive personal portfolio built with **React + Vite**, using a dark navy and electric-cyan visual system inspired by the reference design.

## Run locally

1. Install Node.js (18 or newer).
2. Open this folder in VS Code or a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production-ready files are generated in `dist/`.

## Project structure

```text
venkat-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx       # Page sections and interactive components
│   ├── data.js       # Profile, education, experience, projects and skills
│   ├── index.css     # Theme, responsive layout and animations
│   └── main.jsx      # React entry point
├── .gitignore
├── index.html        # HTML document loaded by the browser
├── package.json      # Dependencies and npm scripts
├── README.md
└── vite.config.js    # Vite + React configuration
```

## Personalise before publishing

- **Profile photo:** `src/data.js` currently uses the image URL from your previous portfolio. For a self-hosted image, put your photo at `public/profile.jpg` and set `image: '/profile.jpg'`.
- **Project repositories:** only the Online Ticket Reservation repository was linked in the previous portfolio source. Add the correct repository URLs for the other projects when you have them; no repository links have been guessed.
- **Competitive programming counts:** the previous portfolio listed 260+ LeetCode and 190+ GeeksforGeeks problems. Refresh these counts before publishing if they have changed.
- **Experience wording and technologies:** verify that the listed technologies accurately describe your current work before publishing.
- **Contact form:** the form uses a `mailto:` action. Submitting it opens the visitor's default email application with the message pre-filled; it does not store messages or send them through a backend.

## Features

- Responsive desktop, tablet and mobile layouts
- Sticky navigation with active-section indication and mobile menu
- Two-column hero section with portrait, animated role label and social links
- About, education, experience, skills, projects, achievements and contact sections
- Scroll-reveal animations and hover states
- Reduced-motion accessibility support
- No Bootstrap and no backend required
