/* Sweet Treat Bakery interactive features. Uses addEventListener for user actions. */
document.addEventListener('DOMContentLoaded', function () {
  // Home page: show a simple message when the visitor presses the button.
  const specialButton = document.querySelector('#special-button');
  const specialMessage = document.querySelector('#special-message');
  if (specialButton && specialMessage) {
    specialButton.addEventListener('click', function () {
      specialMessage.textContent = 'Today’s special idea: ask us about freshly baked cupcakes. Please contact the bakery to confirm availability.';
    });
  }

  // Products page: search and category filtering work together.
  const searchInput = document.querySelector('#product-search');
  const categoryFilter = document.querySelector('#product-filter');
  const productCards = Array.from(document.querySelectorAll('.product-card'));
  const productCount = document.querySelector('#product-count');
  const noProducts = document.querySelector('#no-products');
  function filterProducts() {
    if (!searchInput || !categoryFilter || productCards.length === 0) return;
    const term = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    let visible = 0;
    productCards.forEach(function (card) {
      const matchesText = card.dataset.name.toLowerCase().includes(term);
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const show = matchesText && matchesCategory;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (productCount) productCount.textContent = 'Showing ' + visible + ' of ' + productCards.length + ' product categories.';
    if (noProducts) noProducts.hidden = visible !== 0;
  }
  if (searchInput) searchInput.addEventListener('input', filterProducts);
  if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);

  // Product gallery: open a larger image in an accessible lightbox.
  const lightbox = document.querySelector('#image-lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCaption = document.querySelector('#lightbox-caption');
  const closeButton = document.querySelector('#lightbox-close');
  let lastImageButton = null;
  document.querySelectorAll('.image-button').forEach(function (button) {
    button.addEventListener('click', function () {
      const image = button.querySelector('img');
      if (!image || !lightbox || !lightboxImage) return;
      lastImageButton = button;
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      if (lightboxCaption) lightboxCaption.textContent = image.alt;
      lightbox.hidden = false;
      if (closeButton) closeButton.focus();
    });
  });
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    if (lastImageButton) lastImageButton.focus();
  }
  if (closeButton) closeButton.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
  });

  // Forms: validate fields and prepare a mail draft. This does not send email itself.
  function setupEmailForm(formId, feedbackId, subjectText) {
    const form = document.querySelector('#' + formId);
    const feedback = document.querySelector('#' + feedbackId);
    if (!form || !feedback) return;
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      feedback.className = 'form-feedback';
      feedback.textContent = '';
      const invalidField = Array.from(form.elements).find(function (field) {
        return field.willValidate && !field.checkValidity();
      });
      if (invalidField) {
        feedback.classList.add('error');
        feedback.textContent = 'Please check the highlighted field(s) and complete the form correctly.';
        invalidField.reportValidity();
        invalidField.focus();
        return;
      }
      const data = new FormData(form);
      const lines = [];
      data.forEach(function (value, key) {
        if (key === 'services') {
          const previous = lines.find(function (line) { return line.startsWith('Additional services:'); });
          if (previous) {
            lines[lines.indexOf(previous)] = previous + ', ' + value;
          } else {
            lines.push('Additional services: ' + value);
          }
        } else {
          lines.push(key.replace(/([A-Z])/g, ' $1') + ': ' + value);
        }
      });
      const recipient = form.dataset.mailto;
      if (!recipient || recipient === 'replace-with-your-real-email@example.com') {
        feedback.classList.add('error');
        feedback.textContent = 'The bakery email address must be set in the form before an email can be prepared.';
        return;
      }
      const mailto = 'mailto:' + encodeURIComponent(recipient) + '?subject=' + encodeURIComponent(subjectText) + '&body=' + encodeURIComponent(lines.join('\n'));
      feedback.classList.add('success');
      feedback.textContent = 'Your details passed the form checks. Your email application should open with a draft. Review it and press Send to deliver the message.';
      window.location.href = mailto;
    });
  }
  setupEmailForm('enquiry-form', 'enquiry-feedback', 'Sweet Treat Bakery product enquiry');
  setupEmailForm('contact-form', 'contact-feedback', 'Sweet Treat Bakery contact message');
});
