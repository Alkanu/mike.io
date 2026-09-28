# Professor Mike Portfolio Website Template

A modern, high-quality, fully accessible, and responsive portfolio website template designed for **Professor Mike**, a therapist and university professor based in **New York, USA**, with over 5 years of professional experience.

Built purely with **Static HTML5, Vanilla CSS3, and Vanilla JavaScript (ES6+)**.
Strictly zero frameworks (No React, Next.js, Vue, Angular, Bootstrap, Tailwind CSS, jQuery, Express, or Node backend required).

---

## 📁 Directory & File Structure

```text
professor-mike-website/
│
├── index.html          # Homepage (Hero, core philosophy, quick facts, testimonials CTA)
├── about.html          # Biography, academic background, and guiding principles
├── services.html       # Areas of focus, service cards, and FAQ accordion
├── experience.html     # Career progression timeline & university teaching
├── research.html       # Academic research domains, publications, and lectures
├── contact.html        # Accessible contact form (Formspree) & office details
├── privacy.html        # Static privacy information & Formspree policy notes
├── 404.html            # Custom error page with recovery navigation
│
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet (Variables, reset, components, queries)
│   ├── js/
│   │   └── main.js     # Site configuration object, mobile menu, accordion, form validation
│   └── images/
│       ├── professor-mike-placeholder.jpg # Editable portrait image placeholder
│       └── favicon.svg                    # SVG Favicon badge
│
└── README.md           # Comprehensive site setup & editing instructions
```

---

## 🛠️ Step-by-Step Customization Guide

All personal details, contact information, and content entries use clear, editable placeholders.

### 1. Changing Name, Title, & Location
Search for `Professor Mike [EDITABLE LAST NAME]` across the HTML files or replace `fullName` in `assets/js/main.js`:
- Open `assets/js/main.js` and update `SITE_CONFIG`:
  ```javascript
  const SITE_CONFIG = {
    fullName: "Professor Mike Smith",
    professionalTitle: "Professor & Licensed Therapist",
    location: "New York, USA",
    phone: "+1 (212) 555-0199",
    email: "contact@professormike.com",
    formspreeEndpoint: "https://formspree.io/f/xbjnqweo",
  };
  ```

### 2. Changing Phone Number & Email
Across `index.html`, `about.html`, `services.html`, `experience.html`, `research.html`, `contact.html`, and `privacy.html`:
- Replace `+1 (XXX) XXX-XXXX` with your actual phone number.
- Replace `[EDITABLE_EMAIL@example.com]` with your email address.

---

## 📩 Formspree Setup Instructions

The contact form in `contact.html` is pre-configured to use **Formspree** for serverless form submissions.

### How to Configure Your Formspree Form:
1. Go to [https://formspree.io/](https://formspree.io/) and create a free or professional account.
2. Create a **New Form** in Formspree and give it a name (e.g., "Professor Mike Portfolio Contact").
3. Copy your unique Form Endpoint URL provided by Formspree (e.g., `https://formspree.io/f/xzyvwqpk`).
4. Open `contact.html` and locate the form tag:
   ```html
   <form action="https://formspree.io/f/[EDITABLE_FORMSPREE_ID]" method="POST" id="contact-form">
   ```
5. Replace `[EDITABLE_FORMSPREE_ID]` with your unique Formspree ID code (e.g., `xzyvwqpk`).
6. Update `formspreeEndpoint` in `assets/js/main.js` as well.

---

## 🎨 Changing Design Colors & Fonts

All visual variables are centralized at the top of `assets/css/style.css` in the `:root` block:

```css
:root {
  /* Primary Navy/Slate Colors */
  --color-primary-900: #0f172a;

  /* Deep Teal Accent Color */
  --color-teal-700:    #0f766e;
  --color-teal-600:    #0d9488;

  /* Fonts */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans:  'Plus Jakarta Sans', sans-serif;
}
```

Simply update these hex color codes to instantly change the theme across the entire website.

---

## 🖼️ Replacing the Profile Picture

To update the main portrait photo:
1. Prepare a portrait image (recommended aspect ratio **4:5**, e.g., 800x1000 pixels).
2. Save it to `assets/images/professor-mike-placeholder.jpg` (or save with a new name and update the `src` attribute in `index.html` and `about.html`).

---

## 📄 Adding Services, Experience, and Research

- **Services:** Open `services.html` and edit or copy any `.feature-card` block in the grid.
- **Experience Timeline:** Open `experience.html` and edit or copy any `.timeline-item` block inside `.timeline`.
- **Research & Publications:** Open `research.html` and edit or add entries inside `.research-card`.

---

## 🌐 How to Deploy the Website

Because this is a pure static website, it can be hosted for free or low cost on any static web host:

### GitHub Pages
1. Push this repository to GitHub.
2. In your repository settings, navigate to **Pages**.
3. Select the `main` branch and root `/` directory, then click **Save**.

### Netlify / Vercel
1. Drag and drop the repository folder into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on Vercel.
2. No build command or framework configuration is required!

---

## ♿ Accessibility Features (WCAG Friendly)

- Semantic HTML5 landmark elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`).
- Keyboard accessible navigation with explicit focus states (`:focus-visible`).
- Skip-to-content link for screen readers.
- Proper ARIA states (`aria-expanded`, `aria-controls`, `aria-hidden`, `aria-current="page"`).
- Respects user preference for reduced motion (`prefers-reduced-motion`).
- High color contrast ratio meeting WCAG guidelines.

---

## 📝 License & Usage

© 2026 Professor Mike [EDITABLE LAST NAME]. All rights reserved.
Free to customize as a portfolio website template.
