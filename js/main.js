/* ============================================================
   SWDL — Virtual Assistant Portfolio
   © 2026 Seedwel Investment Limited. All rights reserved.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Sticky header ---------- */
  var header = document.querySelector('.site-header');
  function onScrollHeader() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', toggle.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Hero autoplay slider ---------- */
  var heroSlider = document.querySelector('[data-slider="hero"]');
  if (heroSlider) {
    var hSlides = heroSlider.querySelectorAll('.hero-slide');
    var hDotsWrap = document.querySelector('.hero-dots');
    var hIndex = 0, hTimer = null, H_INTERVAL = 5000;

    hSlides.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      d.addEventListener('click', function () { goToHero(i); restartHero(); });
      hDotsWrap.appendChild(d);
    });
    var hDots = hDotsWrap.querySelectorAll('.dot');

    function goToHero(i) {
      hIndex = (i + hSlides.length) % hSlides.length;
      hSlides.forEach(function (s, k) { s.classList.toggle('active', k === hIndex); });
      hDots.forEach(function (d, k) { d.classList.toggle('active', k === hIndex); });
    }
    function nextHero() { goToHero(hIndex + 1); }
    function restartHero() { clearInterval(hTimer); hTimer = setInterval(nextHero, H_INTERVAL); }
    restartHero();

    var heroSection = heroSlider.closest('.hero');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', function () { clearInterval(hTimer); });
      heroSection.addEventListener('mouseleave', restartHero);
    }
  }

  /* ---------- Testimonials autoplay carousel ---------- */
  var tWrap = document.querySelector('[data-slider="testimonials"]');
  if (tWrap) {
    var tTrack = tWrap.querySelector('.t-track');
    var tSlides = tWrap.querySelectorAll('.t-slide');
    var tIndex = 0, tTimer = null, T_INTERVAL = 4500;
    var tDotsWrap = tWrap.querySelector('.t-dots');

    tSlides.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Testimonial ' + (i + 1));
      d.addEventListener('click', function () { goToT(i); restartT(); });
      tDotsWrap.appendChild(d);
    });
    var tDots = tDotsWrap.querySelectorAll('.dot');

    function goToT(i) {
      tIndex = (i + tSlides.length) % tSlides.length;
      tTrack.style.transform = 'translateX(-' + (tIndex * 100) + '%)';
      tDots.forEach(function (d, k) { d.classList.toggle('active', k === tIndex); });
    }
    function restartT() { clearInterval(tTimer); tTimer = setInterval(function () { goToT(tIndex + 1); }, T_INTERVAL); }
    restartT();

    tWrap.querySelector('[data-t="prev"]').addEventListener('click', function () { goToT(tIndex - 1); restartT(); });
    tWrap.querySelector('[data-t="next"]').addEventListener('click', function () { goToT(tIndex + 1); restartT(); });
    tWrap.addEventListener('mouseenter', function () { clearInterval(tTimer); });
    tWrap.addEventListener('mouseleave', restartT);
  }

  /* ---------- Portfolio gallery autoplay ---------- */
  var gWrap = document.querySelector('[data-slider="gallery"]');
  if (gWrap) {
    var gTrack = gWrap.querySelector('.g-track');
    var gSlides = gWrap.querySelectorAll('.g-slide');
    var gProgress = gWrap.querySelector('.g-progress');
    var gIndex = 0, gTimer = null, G_INTERVAL = 4200;

    function goToG(i) {
      gIndex = (i + gSlides.length) % gSlides.length;
      gTrack.style.transform = 'translateX(-' + (gIndex * 100) + '%)';
      gSlides.forEach(function (s, k) {
        var c = s.querySelector('.g-count');
        if (c) c.textContent = (k === gIndex ? gIndex + 1 : k + 1) + ' / ' + gSlides.length;
      });
      if (gProgress) {
        gProgress.style.transition = 'none';
        gProgress.style.width = '0';
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            gProgress.style.transition = 'width ' + G_INTERVAL + 'ms linear';
            gProgress.style.width = '100%';
          });
        });
      }
    }
    function restartG() { clearInterval(gTimer); gTimer = setInterval(function () { goToG(gIndex + 1); }, G_INTERVAL); }
    goToG(0);
    restartG();

    gWrap.querySelector('[data-g="prev"]').addEventListener('click', function () { goToG(gIndex - 1); restartG(); });
    gWrap.querySelector('[data-g="next"]').addEventListener('click', function () { goToG(gIndex + 1); restartG(); });
    gWrap.addEventListener('mouseenter', function () { clearInterval(gTimer); });
    gWrap.addEventListener('mouseleave', restartG);
  }

  /* ---------- Back to top ---------- */
  var btt = document.querySelector('.back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    btt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Contact form (static demo) ---------- */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = form.querySelector('.form-success');
      if (success) success.classList.add('show');
      form.querySelectorAll('input, textarea, select').forEach(function (f) { f.value = ''; });
      setTimeout(function () { if (success) success.classList.remove('show'); }, 6000);
    });
  }
})();
