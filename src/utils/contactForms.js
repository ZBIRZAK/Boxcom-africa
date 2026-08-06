const FORM_SELECTOR = '.contact-form, .contact-page-form';

function getStatusElement(form) {
  let status = form.querySelector('.contact-form-status');
  if (!status) {
    status = document.createElement('p');
    status.className = 'contact-form-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    form.appendChild(status);
  }
  return status;
}

export function installContactFormHandler() {
  const handleSubmit = async (event) => {
    const form = event.target.closest?.(FORM_SELECTOR);
    if (!form) return;

    event.preventDefault();
    if (!form.reportValidity() || form.dataset.submitting === 'true') return;

    const submitButton = form.querySelector('button[type="submit"]');
    const status = getStatusElement(form);
    const originalLabel = submitButton?.textContent;
    form.dataset.submitting = 'true';
    status.className = 'contact-form-status';
    status.textContent = 'Sending your message…';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
    }

    const value = (selector) => form.querySelector(selector)?.value?.trim() || '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: value('[name="name"]'),
          company: value('[name="company"]'),
          email: value('[name="email"]'),
          message: value('[name="message"], textarea'),
          page: window.location.href,
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) throw new Error(result.message || 'We could not send your message.');

      form.reset();
      status.className = 'contact-form-status is-success';
      status.textContent = result.message || 'Thank you. Your message has been sent.';
    } catch (error) {
      status.className = 'contact-form-status is-error';
      status.textContent = error.message || 'We could not send your message. Please email contact@box-com.com.';
    } finally {
      form.dataset.submitting = 'false';
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
    }
  };

  document.addEventListener('submit', handleSubmit, true);
  return () => document.removeEventListener('submit', handleSubmit, true);
}
