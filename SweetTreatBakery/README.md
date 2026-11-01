# Sweet Treat Bakery Website — POE 3

## Student information
- Student name: [Enter your full name]
- Student number: [Enter your student number]
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
Each page has a unique title, meta description and a keyword meta tag (included because the assessment asks for it; Google says it does not use the keywords meta tag for ranking). The pages use meaningful headings, descriptive internal links, image `alt` text and a clear page structure. These are basic on-page improvements; they do not guarantee a particular search ranking. Google recommends useful content, clear titles and descriptions, descriptive links and images (Google Search Central, n.d.).

## Sitemap
See `sitemap.txt` for the page structure.

## Testing checklist
1. Open `index.html` in a browser and use every navigation link.
2. Check that the logo and product images load.
3. On the Products page, search for `cake`, then choose a category. Confirm the results count changes.
4. Click a product image, then close it using the close button, clicking outside the image, and the Escape key.
5. On both forms, submit empty fields and confirm validation stops submission. Then complete the fields with test information and confirm the email draft opens. Do not send a test email unless intended.
6. Resize the browser to desktop, tablet and mobile widths. Check navigation, text, cards, forms and map.
7. Test keyboard navigation with Tab and Enter.
8. Validate each HTML page at the W3C Markup Validation Service and check the CSS with the W3C CSS Validator. Fix issues reported before submission.
9. Record actual test outcomes and take screenshots for the assignment. Do not mark a test as passed until you have run it.

## GitHub commits
Use several meaningful commits rather than one commit for every change at once. Example commit messages (only use these after you have made the matching changes):
- `Fix HTML structure and improve page metadata`
- `Add responsive layout and accessible navigation styles`
- `Add product search filter and image lightbox`
- `Validate enquiry and contact forms`
- `Document POE 3 features and testing results`

Useful commands from the project folder:
```bash
git status
git branch --show-current
git remote -v
git add index.html about.html services.html enquiry.html contact.html
git commit -m "Fix HTML structure and improve page metadata"
git add css/style.css
git commit -m "Add responsive layout and accessible navigation styles"
git add js/script.js
git commit -m "Add product search filter and image lightbox"
git add README.md CHANGELOG.md sitemap.txt
git commit -m "Document POE 3 features and testing results"
git push
```
If the repository has not been connected to GitHub, use the repository URL supplied by your GitHub account to configure the remote. Never copy a placeholder URL.

## Image credits
The ZIP did not include source URLs for the image files. Add the original source and licence for each image here before submission, or state that an image is your own only if you created it. Do not claim that an image came from a particular website unless you can verify its source.

## Harvard references
Google Search Central (n.d.) *SEO Starter Guide: The Basics*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 31 October 2026).

MDN Web Docs (n.d.) *EventTarget: addEventListener() method*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Accessed: 31 October 2026).

MDN Web Docs (n.d.) *Responsive web design*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design (Accessed: 31 October 2026).

World Wide Web Consortium (W3C) (n.d.) *The W3C Markup Validation Service*. Available at: https://validator.w3.org/ (Accessed: 31 October 2026).

World Wide Web Consortium (W3C) (n.d.) *CSS Validation Service*. Available at: https://jigsaw.w3.org/css-validator/ (Accessed: 31 October 2026).
