import { fireEvent, waitFor } from '@testing-library/dom';
import { installContactFormHandler } from './contactForms';

test('preserves the from attribution in the message and GA4 lead event', async () => {
  window.history.replaceState({}, '', '/contact?from=crisis');
  window.gtag = jest.fn();
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ message: 'Sent' }),
  });
  document.body.innerHTML = `
    <form class="contact-page-form">
      <input type="hidden" name="from" value="">
      <input name="name" value="Test Person">
      <input name="company" value="Test Company">
      <input name="email" value="test@example.com">
      <select name="need"><option selected>Situation urgente</option></select>
      <textarea name="message">Test message</textarea>
      <button type="submit">Send</button>
    </form>
  `;
  const form = document.querySelector('form');
  form.reportValidity = jest.fn(() => true);
  const uninstall = installContactFormHandler();

  expect(form.elements.from.value).toBe('crisis');
  fireEvent.submit(form);

  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  const payload = JSON.parse(global.fetch.mock.calls[0][1].body);
  expect(payload.from).toBe('crisis');
  expect(payload.need).toBe('Situation urgente');
  expect(payload.page).toContain('/contact?from=crisis');
  await waitFor(() => expect(window.gtag).toHaveBeenCalledWith('event', 'generate_lead', { from: 'crisis' }));

  uninstall();
  delete window.gtag;
  delete global.fetch;
});
