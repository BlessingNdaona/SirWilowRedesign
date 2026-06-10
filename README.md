<div align="center">

# Wilow Diallo — Portfolio Website Redesign

**Editorial portfolio site for a Paris-based fashion stylist/editor**
*Client project delivered through [Moble Tech](#) 🇿🇦*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Frameworks](https://img.shields.io/badge/Dependencies-Zero-2EA44F?style=for-the-badge)

</div>

---

## About the project

This is a complete redesign of a professional fashion stylist's portfolio website, built as part of a client project at **Moble Tech**, the startup I co-founded. The brief: an image-led editorial site that showcases the client's styling work for fashion houses and publications, with a clean, gallery-like feel fast, responsive, and easy to extend with new projects.

The entire site is dependency-free HTML, CSS, and JavaScript — no frameworks, no build tools. It can be hosted anywhere as static files.

## Features

- **Image-led homepage** — hero section, client logo band, manifesto, and a masonry-style portfolio grid
- **Live category filtering** — filter the portfolio by Editorial / Campaign / Lookbook / Personal work without any page reloads
- **Data-driven project pages** — one reusable `work.html` template renders any project from a single JavaScript data file (`project-data.js`), read via URL parameters
- **Project archive hub** — auto-generated from the same data file, so adding a new project means editing one file, not building a new page
- **Dark mode toggle** — with the user's preference saved in `localStorage` so it persists between visits
- **Scroll reveal animations** — sections fade in as you scroll, powered by the `IntersectionObserver` API (with a graceful fallback for older browsers)
- **Performance optimizations** — lazy loading for gallery images, eager loading + `fetchpriority` for the hero, and async image decoding
- **Contact form** — opens a pre-filled email enquiry to the client's studio address
- **Accessibility** — semantic HTML, ARIA labels, `aria-current` navigation states, and descriptive alt text throughout
- **Responsive layout** — built with CSS variables and a flexible layout system that works from mobile to desktop

##  How it was built

| Layer | Approach |
|---|---|
| **Structure** | Semantic HTML5 across `index`, `about`, `contact`, and a reusable project detail template |
| **Styling** | A single `styles.css` using CSS custom properties for the approved color palette and three-font typography system, with a light default theme and optional dark mode |
| **Interactivity** | Vanilla JS (`script.js`): portfolio filtering, theme toggle, scroll reveals, and dynamic project rendering |
| **Content** | All project metadata (titles, descriptions, locations, image sequences) lives in `project-data.js`, keeping content separate from markup |
| **Images** | Optimized working copies in `assets/`, lazy-loaded galleries so first paint stays fast |

```text
├── index.html              # Image-led homepage with filterable portfolio
├── about.html              # Biography, portrait, and moodboard mosaic
├── contact.html            # Enquiry form + contact details
├── projects/
│   ├── index.html          # Project archive hub (auto-generated)
│   ├── work.html           # Reusable project detail template
│   └── project-data.js     # All project content in one place
├── styles.css              # Palette, typography, layout, dark mode
├── script.js               # Filtering, reveals, theme, rendering
└── assets/                 # Optimized images and client logos
```

##  What building this taught me

This redesign pushed me well beyond static pages. The biggest lesson was **separating content from structure**: instead of hand-coding nine project pages, I learned to store everything in one data file and render it dynamically with JavaScript reading URL parameters, generating HTML from data, and building "previous/next" navigation programmatically. That's essentially thinking in *data* rather than in pages, which connects directly to where I'm heading with data analytics. I also learned new browser APIs I'd never touched before  `IntersectionObserver` for scroll animations and `localStorage` for persisting the dark-mode choice plus practical performance work like lazy loading and image decoding strategies. And because this was real client work through Moble Tech, I learned the non-code side too: working to an approved brief, a fixed palette and typography system, and someone else's standards rather than my own.

## Running it locally

No build step needed, clone the repo and open `index.html` in a browser, or serve it with any static server:


---

<div align="center">

Built with care by **Blessing Ndaona** · Co-Founder @ **Moble Tech** · Pretoria, South Africa 🇿🇦

*Part of my journey: Web foundations → Data Analytics → Data Science*

</div>
