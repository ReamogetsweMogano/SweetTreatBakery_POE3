# Sweet Treat Bakery Website — POE 3

## Student information
- Student name: Reamogetswe Mogano
- Student number: ST10522049
- Module: Web Development
- Assessment: POE 3 — JavaScript functionality and SEO

## Project overview
Sweet Treat Bakery is a student website project for a bakery. It gives visitors information about the bakery, shows example products, and lets visitors prepare an enquiry or contact email. The website uses HTML for its content, CSS for the layout and appearance, and JavaScript for interactive features.

## Website goals
- Make bakery products easy to browse.
- Help visitors find information and contact the bakery.
- Add useful interactive features.
- Improve page titles, descriptions, headings, links and image alternative text.
- Make the website usable on desktop, tablet and mobile screens.

## Pages and features
- `index.html`: introduction, popular products and a button that updates the special message.
- `about.html`: overview, mission, vision and values.
- `services.html`: product cards, search, category filter and image lightbox.
- `enquiry.html`: product enquiry form with HTML and JavaScript validation.
- `contact.html`: contact details, business hours, map and contact form.
- `css/style.css`: shared typography, colours, layout, interactive states and responsive breakpoints.
- `js/script.js`: home-page interaction, product search/filter, image lightbox and form checks.
- `sitemap.txt`: simple page structure.
- `sitemap.xml`: search-engine sitemap template; replace the example website address before publishing.
- `robots.txt`: crawler instruction file; add the real sitemap URL after deployment.
- `CHANGELOG.md`: record of project changes.

## JavaScript explanation
The JavaScript uses `addEventListener()` to respond to clicks, typing, filter changes, keyboard Escape and form submission. Product search and category filtering work together. Clicking a product image opens a larger image, and the Escape key closes it. Form fields are checked before an email draft is prepared.

## Form limitation and privacy note
The forms currently use a `mailto:` link after validating the information. This opens the visitor's email application and prepares a draft. It does **not** automatically send an email, store the form data, or use AJAX. A real online form that sends messages without relying on the visitor's email application needs a suitable form service or server-side endpoint, which must be configured and tested. Do not submit real sensitive personal information through this student demo.

## SEO improvements
Each page has a unique title, meta description and a keyword meta tag. The pages use meaningful headings, descriptive internal links, image `alt` text and a clear page structure. These are basic on-page improvements; they do not guarantee a particular search ranking. Google recommends useful content, clear titles and descriptions, descriptive links and images (Google Search Central, n.d.).

## Sitemap
SWEET TREAT BAKERY — WEBSITE SITEMAP

Home (index.html)
├── About Us (about.html)
├── Products (services.html)
│   ├── Cakes
│   ├── Cupcakes
│   └── Fresh Bread
├── Enquiry (enquiry.html)
└── Contact (contact.html)
    ├── Contact details and business hours
    ├── Map
    └── Contact form

## References
Google Search Central (n.d.) *SEO Starter Guide: The Basics*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 31 October 2026).

MDN Web Docs (n.d.) *EventTarget: addEventListener() method*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Accessed: 31 October 2026).

MDN Web Docs (n.d.) *Responsive web design*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design (Accessed: 31 October 2026).

World Wide Web Consortium (W3C) (n.d.) *The W3C Markup Validation Service*. Available at: https://validator.w3.org/ (Accessed: 31 October 2026).

World Wide Web Consortium (W3C) (n.d.) *CSS Validation Service*. Available at: https://jigsaw.w3.org/css-validator/ (Accessed: 31 October 2026).
Google Search Central (n.d.) Introduction to robots.txt. Available at: Google Search Central robots.txt guide (Accessed: 1 November 2026).
