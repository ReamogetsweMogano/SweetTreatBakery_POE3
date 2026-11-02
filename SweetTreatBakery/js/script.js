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

    // AJAX forms: validate the fields and send the data to Web3Forms.
  async function setupAjaxForm(formId, feedbackId, subjectText) {
    const form = document.querySelector('#' + formId);
    const feedback = document.querySelector('#' + feedbackId);

    if (!form || !feedback) return;

    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      feedback.className = 'form-feedback';
      feedback.textContent = '';

      // Check that the visitor completed the form correctly.
      const invalidField = Array.from(form.elements).find(function (field) {
        return field.willValidate && !field.checkValidity();
      });

      if (invalidField) {
        feedback.classList.add('error');
        feedback.textContent =
          'Please complete the required fields correctly.';
        invalidField.reportValidity();
        invalidField.focus();
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;

      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      try {
        const formData = new FormData(form);

        // Add the email subject and bakery name.
        formData.set('subject', subjectText);
        formData.set('from_name', 'Sweet Treat Bakery Website');

        // Send the form using AJAX without reloading the page.
        const response = await fetch(
          'https://api.web3forms.com/submit',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json'
            },
            body: formData
          }
        );

        const result = await response.json();

        if (response.ok && result.success) {
          feedback.classList.add('success');
          feedback.textContent =
            'Thank you! Your message was sent successfully.';

          form.reset();
        } else {
          throw new Error(
            result.message ||
            result.body?.message ||
            'The form could not be submitted.'
          );
        }
      } catch (error) {
        feedback.classList.add('error');
        feedback.textContent =
          'Sorry, your message could not be sent. Please check your connection and try again.';
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }

  // Set up the product enquiry and contact forms.
  setupAjaxForm(
    'enquiry-form',
    'enquiry-feedback',
    'Sweet Treat Bakery Product Enquiry'
  );

  setupAjaxForm(
    'contact-form',
    'contact-feedback',
    'Sweet Treat Bakery Contact Message'
  );
 
});
