# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features glassmorphism design, dark/light mode, smooth animations, and 10 pages.

## Features

- **10 Pages**: Home, About, Skills, Projects, Experience, Certifications, Resume, Blog, Gallery, Contact
- **Dark/Light Mode**: Toggle with localStorage persistence
- **Glassmorphism UI**: Modern frosted glass aesthetic
- **Animations**: Smooth page transitions with Framer Motion
- **Particle Background**: Interactive canvas-based particles
- **Custom Cursor**: Animated cursor with hover effects
- **Responsive Design**: Mobile-first approach
- **JSON Data Files**: Easy content management without touching code
- **PWA Ready**: Installable as an app
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── StatCard.jsx
│   │   ├── TypingEffect.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── CertificationCard.jsx
│   │   ├── BlogCard.jsx
│   │   ├── SkillCard.jsx
│   │   ├── Timeline.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── BackToTop.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Loader.jsx
│   │   └── ParticleBackground.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Resume.jsx
│   │   ├── Blog.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── data/              # JSON data files
│   │   ├── personal.json
│   │   ├── about.json
│   │   ├── skills.json
│   │   ├── projects.json
│   │   ├── experience.json
│   │   ├── certifications.json
│   │   ├── blog.json
│   │   ├── gallery.json
│   │   ├── testimonials.json
│   │   └── navigation.js
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### 1. Personal Information

Edit `src/data/personal.json`:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "your.email@example.com",
  "phone": "+91 1234567890",
  "location": "City, Country",
  "website": "https://yourwebsite.com",
  "bio": "Your bio here...",
  "social": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "twitter": "https://twitter.com/username",
    "instagram": "https://instagram.com/username"
  }
}
```

### 2. Skills

Edit `src/data/skills.json`:

```json
[
  {
    "category": "Programming Languages",
    "skills": [
      { "name": "JavaScript", "level": 90 },
      { "name": "Python", "level": 85 }
    ]
  }
]
```

### 3. Projects

Edit `src/data/projects.json`:

```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Short description",
    "longDescription": "Detailed description",
    "image": "/project-image.jpg",
    "category": "Web App",
    "technologies": ["React", "Node.js"],
    "demoUrl": "https://demo.com",
    "githubUrl": "https://github.com/repo",
    "featured": true
  }
]
```

### 4. Contact Form (EmailJS)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service, template, and get your public key
3. Add to `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Uncomment the EmailJS code in `src/components/ContactForm.jsx`

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

Or drag the `dist` folder to Netlify Drop.

### GitHub Pages

1. Update `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Add to `package.json`:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Install gh-pages and run:

```bash
npm install --save-dev gh-pages
npm run deploy
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #2563EB | Buttons, links, accents |
| Secondary | #7C3AED | Gradients, highlights |
| Accent | #06B6D4 | Icons, badges |
| Background | #0F172A | Dark mode background |
| Surface | #1E293B | Cards, elevated elements |

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion 11** - Animations
- **React Router DOM 6** - Routing
- **Lucide React** - Icons
- **EmailJS** - Contact form emails

## License

MIT - Feel free to use this template for your own portfolio!