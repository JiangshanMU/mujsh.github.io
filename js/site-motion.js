/* Lightweight, dependency-free motion. All article content works without this file. */
(function () {
  'use strict';

  function init() {
    if (!document.getElementById('body-content') || document.getElementById('jm-reading-progress')) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    var storageKey = 'jm-decorative-motion-disabled';
    var userDisabled = false;
    try { userDisabled = localStorage.getItem(storageKey) === 'true'; } catch (_) { /* Storage is optional. */ }

    var progress = document.createElement('div');
    progress.id = 'jm-reading-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progress);

    var toggle = document.createElement('button');
    toggle.id = 'jm-motion-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Decorative motion');
    document.body.appendChild(toggle);

    var canvas = document.createElement('canvas');
    canvas.id = 'jm-cursor-trail';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    var ctx = null;
    try { ctx = canvas.getContext('2d'); } catch (_) { /* Canvas is optional. */ }

    var particles = [];
    var frame = 0;
    var scrollFrame = 0;
    var observer = null;
    var lastX = null;
    var lastY = null;
    var lastSpawn = 0;
    var revealTargets = [];

    function motionEnabled() { return !userDisabled && !reduceMotion.matches; }
    function trailEnabled() { return motionEnabled() && finePointer.matches && !!ctx && !document.hidden; }

    function updateProgress() {
      scrollFrame = 0;
      var height = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = height > 0 ? Math.max(0, Math.min(1, window.scrollY / height)) : 0;
      progress.style.transform = 'scaleX(' + ratio + ')';
    }

    function queueProgress() {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateProgress);
    }

    function clearTrail() {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      particles.length = 0;
      lastX = lastY = null;
      lastSpawn = 0;
      if (ctx) ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    function resize() {
      clearTrail();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      queueProgress();
    }

    function paint(now) {
      frame = 0;
      if (!trailEnabled()) { clearTrail(); return; }
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles = particles.filter(function (p) { return now - p.born < 650; });
      particles.forEach(function (p) {
        var age = (now - p.born) / 650;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(29,86,153,' + ((1 - age) * 0.3) + ')';
        ctx.arc(p.x + p.drift * age, p.y - age * 15, p.radius * (1 - age * 0.65), 0, Math.PI * 2);
        ctx.fill();
      });
      if (particles.length) frame = window.requestAnimationFrame(paint);
    }

    function pointerMove(event) {
      if (!trailEnabled() || event.pointerType === 'touch' || event.buttons) return;
      var x = event.clientX, y = event.clientY, now = performance.now();
      if (lastX === null) { lastX = x; lastY = y; return; }
      if (now - lastSpawn < 28 || Math.abs(x - lastX) + Math.abs(y - lastY) < 9) return;
      // Keep links, text selection, navigation and form controls visually quiet.
      if (event.target.closest && event.target.closest('a, button, input, textarea, select, nav, [contenteditable]')) return;
      particles.push({ x: x, y: y, born: now, radius: 1.8 + Math.random() * 1.8, drift: (Math.random() - 0.5) * 12 });
      if (particles.length > 30) particles.shift();
      lastSpawn = now; lastX = x; lastY = y;
      if (!frame) frame = window.requestAnimationFrame(paint);
    }

    function showAll() {
      if (observer) observer.disconnect();
      observer = null;
      revealTargets.forEach(function (el) {
        el.classList.remove('jm-reveal-pending', 'jm-reveal-ready', 'jm-reveal-visible');
      });
      revealTargets = [];
    }

    function setupReveals() {
      showAll();
      if (!motionEnabled() || !('IntersectionObserver' in window)) return;
      try {
        observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('jm-reveal-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
        var nodes = document.querySelectorAll('#body-content h2, #body-content h3, #body-content .card, #body-content > p, #body-content > table, #body-content > ul');
        Array.prototype.forEach.call(nodes, function (el) {
          // Content already in view, focused, or above the viewport never flashes hidden.
          if (el.getBoundingClientRect().top < window.innerHeight || el.contains(document.activeElement)) return;
          revealTargets.push(el);
          el.classList.add('jm-reveal-pending', 'jm-reveal-ready');
          observer.observe(el);
        });
      } catch (_) { showAll(); }
    }

    function syncPreferences() {
      clearTrail();
      var enabled = motionEnabled();
      canvas.hidden = !trailEnabled();
      toggle.textContent = enabled ? 'Motion on' : 'Motion off';
      toggle.setAttribute('aria-pressed', String(enabled));
      toggle.disabled = reduceMotion.matches;
      toggle.title = reduceMotion.matches ? 'Your system preference reduces motion.' : 'Toggle cursor particles and scroll animations';
      setupReveals();
    }

    toggle.addEventListener('click', function () {
      userDisabled = !userDisabled;
      try { localStorage.setItem(storageKey, String(userDisabled)); } catch (_) { /* Use this session's preference. */ }
      syncPreferences();
    });
    function watch(query) {
      if (query.addEventListener) query.addEventListener('change', syncPreferences);
      else if (query.addListener) query.addListener(syncPreferences);
    }
    watch(reduceMotion);
    watch(finePointer);
    window.addEventListener('scroll', queueProgress, { passive: true });
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('load', queueProgress, { once: true });
    document.addEventListener('pointermove', pointerMove, { passive: true });
    document.addEventListener('pointerout', function (event) { if (!event.relatedTarget) clearTrail(); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) clearTrail(); });
    document.addEventListener('focusin', function (event) {
      // Focusing a section can reveal it before IntersectionObserver's next callback.
      var el = event.target.closest && event.target.closest('.jm-reveal-pending');
      if (el) { el.classList.add('jm-reveal-visible'); if (observer) observer.unobserve(el); }
    });
    if ('ResizeObserver' in window) new ResizeObserver(queueProgress).observe(document.body);
    window.addEventListener('pageshow', function () { showAll(); setupReveals(); queueProgress(); });
    resize();
    syncPreferences();
    updateProgress();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
}());
