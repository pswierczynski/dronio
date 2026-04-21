/* ============================================================
   DRONIO.PL — główny skrypt
   ============================================================ */

'use strict';

/* ---- Reveal on scroll --------------------------------------- */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => observer.observe(el));
})();

/* ---- Lazy-load fade-in dla zdjęć galerii ------------------- */
/*
  Zdjęcia galerii startują z opacity:0 (w CSS).
  Po załadowaniu pliku dodajemy klasę .is-loaded → fade-in do opacity:1.
  Działa niezależnie od natywnego loading="lazy" przeglądarki.
*/
(function initGalleryFade() {
  const imgs = document.querySelectorAll('.gallery__item img');
  if (!imgs.length) return;

  imgs.forEach((img) => {
    if (img.complete && img.naturalWidth > 0) {
      // Już załadowane (np. z cache) — pokaż natychmiast
      img.classList.add('is-loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('is-loaded'));
      img.addEventListener('error', () => img.classList.add('is-loaded')); // nie blokuj przy błędzie
    }
  });
})();

/* ---- Lightbox ----------------------------------------------- */
(function initLightbox() {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn    = document.getElementById('lightboxClose');
  const items       = document.querySelectorAll('.gallery__item');

  if (!lightbox || !items.length) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.dataset.src || item.querySelector('img')?.src;
      const alt = item.querySelector('img')?.alt;
      if (src) openLightbox(src, alt);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
})();

/* ---- Formularz — walidacja i obsługa ------------------------ */
(function initForm() {
  const form = document.querySelector('.form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = form.querySelector('#name');
    const email   = form.querySelector('#email');
    const message = form.querySelector('#message');
    let valid = true;

    /* Walidacja wymaganych pól */
    [name, email, message].forEach((field) => {
      if (!field) return;
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = 'rgba(255,255,255,0.9)';
        valid = false;
      }
    });

    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = 'rgba(255,255,255,0.9)';
      valid = false;
    }

    if (!valid) return;

    const btn = form.querySelector('button[type="submit"]');

    /* Wysyłka przez Formspree */
    try {
      if (btn) {
        btn.textContent = 'Wysyłanie...';
        btn.disabled = true;
      }

      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showConfirmation(btn);
      } else {
        showError(btn);
      }
    } catch (err) {
      showError(btn);
    }
  });

  function showConfirmation(btn) {
    if (!btn) return;
    btn.textContent = 'Wysłano — odpiszemy wkrótce';
    btn.disabled = true;
    btn.style.opacity = '0.6';
  }

  function showError(btn) {
    if (!btn) return;
    btn.textContent = 'Błąd wysyłki — spróbuj ponownie';
    btn.disabled = false;
    btn.style.opacity = '1';
  }
})();
