document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const navigation = document.querySelector('.mobile-links');
  if (menu && navigation) {
    const setMenu = open => {
      navigation.hidden = !open;
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    };
    menu.addEventListener('click', () => setMenu(navigation.hidden));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !navigation.hidden) {
        setMenu(false);
        menu.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!navigation.hidden && !menu.contains(event.target) && !navigation.contains(event.target)) setMenu(false);
    });
    window.matchMedia('(min-width: 851px)').addEventListener('change', event => {
      if (event.matches) setMenu(false);
    });
  }

  const currentPath = window.location.pathname.replace(/\/$/, '/index.html');
  document.querySelectorAll('.links a, .mobile-links a').forEach(link => {
    if (new URL(link.href).pathname === currentPath) link.setAttribute('aria-current', 'page');
  });

  const inquiryType = document.querySelector('#inquiryType');
  const customField = document.querySelector('#customField');
  if (inquiryType && customField) {
    const syncCustomField = () => {
      const isOther = inquiryType.value === 'other';
      customField.closest('.field').hidden = !isOther;
      customField.required = isOther;
    };
    inquiryType.addEventListener('change', syncCustomField);
    syncCustomField();
  }

  const form = document.querySelector('#contactForm');
  if (form) {
    const status = document.querySelector('#formStatus');
    const hostname = window.location.hostname;
    const deployed = hostname === 'fepar.africa' || hostname === 'www.fepar.africa' || hostname.endsWith('.netlify.app');
    if (deployed && new URLSearchParams(window.location.search).get('success') === '1') {
      form.classList.add('submitted');
      status.textContent = 'Thank you. Your inquiry has been submitted. We will review your note and respond as thoughtfully as we can.';
      status.setAttribute('tabindex', '-1');
      status.focus();
    }
    form.addEventListener('submit', event => {
      if (!deployed) {
        event.preventDefault();
        status.textContent = 'This preview cannot send the form. Please email hello@fepar.africa using the link alongside the form.';
        status.focus();
      }
    });
  }
});
