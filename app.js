// app.js — shared chrome loader + status clock
// Fetches navbar.html (status bar + nav) into #chrome-root on every page.
// Works once deployed over http(s) (Cloudflare Pages, any static host, or
// `python3 -m http.server` locally). If fetch can't run — e.g. the file was
// opened directly via file:// — a minimal inline fallback nav is used instead
// so the page is never left without navigation.

(function () {
  var mount = document.getElementById('chrome-root');
  if (!mount) return;

  var FALLBACK = '' +
    '<nav class="fallback-nav" aria-label="Primary">' +
    '<a href="index.html">~/home</a>' +
    '<a href="about.html">~/about</a>' +
    '<a href="projects.html">~/projects</a>' +
    '</nav>';

  fetch('navbar.html')
    .then(function (res) {
      if (!res.ok) throw new Error('navbar fetch failed: ' + res.status);
      return res.text();
    })
    .then(function (html) {
      mount.innerHTML = html;
      markActiveLink();
      startUptimeClock();
    })
    .catch(function () {
      mount.innerHTML = FALLBACK;
      markActiveLink();
    });

  function markActiveLink() {
    var current = document.body.getAttribute('data-page');
    if (!current) return;
    var link = mount.querySelector('.nav-links a[data-page="' + current + '"]');
    if (link) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  }

  function startUptimeClock() {
    var el = document.getElementById('uptime-clock');
    if (!el) return;
    var start = performance.now();

    function tick() {
      var elapsed = Math.floor((performance.now() - start) / 1000);
      var h = String(Math.floor(elapsed / 3600)).padStart(2, '0');
      var m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
      var s = String(elapsed % 60).padStart(2, '0');
      el.textContent = h + ':' + m + ':' + s;
    }

    tick();
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      setInterval(tick, 1000);
    }
  }
})();