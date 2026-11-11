document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // A lightweight reading indicator gives long pages a clear sense of progress.
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  let progressFrame = 0;
  const updateProgress = () => {
    if (progressFrame) return;
    progressFrame = window.requestAnimationFrame(() => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const amount = range > 0 ? window.scrollY / range : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`;
      progressFrame = 0;
    });
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  if ('IntersectionObserver' in window) {
    const elements = document.querySelectorAll('.section-heading, .section-head, .route, .card, .step, .note, .support-grid article');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' });
    elements.forEach((element, index) => {
      element.classList.add('reveal');
      if (element.matches('.card, .step, .support-grid article')) {
        element.style.setProperty('--reveal-delay', `${(index % 5) * 75}ms`);
      }
      observer.observe(element);
    });
    document.body.classList.add('js-reveal');
  }

  const art = document.querySelector('.hero-art');
  if (art && window.matchMedia('(min-width: 851px)').matches) {
    let frame = 0;
    window.addEventListener('pointermove', event => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        art.style.setProperty('--pointer-x', `${(event.clientX / window.innerWidth - 0.5) * 18}px`);
        art.style.setProperty('--pointer-y', `${(event.clientY / window.innerHeight - 0.5) * 18}px`);
        frame = 0;
      });
    }, { passive: true });
  }
});
