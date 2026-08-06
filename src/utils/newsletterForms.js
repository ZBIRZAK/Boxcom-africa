const FORM_SELECTOR = '.newsletter-form';

function getStatusElement(form) {
  const newsletter = form.closest('.newsletter');
  let status = newsletter?.querySelector('.newsletter-status');

  if (!status) {
    status = document.createElement('p');
    status.className = 'newsletter-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    (newsletter || form).appendChild(status);
  }

  return status;
}

export function installNewsletterFormHandler() {
  const handleSubmit = async (event) => {
    const form = event.target.closest?.(FORM_SELECTOR);
    if (!form) return;

    event.preventDefault();
    if (!form.reportValidity() || form.dataset.submitting === 'true') return;

    const input = form.querySelector('[name="newsletterEmail"]');
    const submitButton = form.querySelector('button[type="submit"]');
    const status = getStatusElement(form);
    const originalLabel = submitButton?.textContent;

    form.dataset.submitting = 'true';
    status.className = 'newsletter-status';
    status.textContent = 'Subscribing…';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = '…';
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: input?.value?.trim() || '',
          page: window.location.href,
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) throw new Error(result.message || 'We could not add your email.');

      form.reset();
      status.className = 'newsletter-status is-success';
      status.textContent = result.message || 'Thank you for subscribing.';
    } catch (error) {
      status.className = 'newsletter-status is-error';
      status.textContent = error.message || 'We could not add your email. Please try again.';
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
