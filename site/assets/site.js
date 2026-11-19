/* Setup Desk: shared behaviour. Reads settings from /site-config.js. */
(function () {
  var cfg = window.SETUP_DESK || {};

  // ---- Helpers: is a setting filled in with a real value? ----
  function amazonTag() {
    var t = String(cfg.amazonTag || '').trim();
    return /^[A-Za-z0-9_-]+-\d{2}$/.test(t) ? t : '';
  }
  function adsenseClient() {
    var id = String(cfg.adsensePublisherId || '').trim().replace(/^ca-/, '');
    return /^pub-\d{10,20}$/.test(id) ? 'ca-' + id : '';
  }
  function slotId(v) {
    v = String(v || '').trim();
    return /^\d{6,}$/.test(v) ? v : '';
  }
  function placeholder(v, def) {
    v = String(v || '').trim();
    return v || def;
  }

  // ---- Amazon links: add tracking tag and correct rel on every amazon.com.au link ----
  function tagAmazonLinks() {
    var tag = amazonTag();
    var links = document.querySelectorAll('a[href*="amazon.com.au"]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      try {
        var url = new URL(a.href);
        if (tag) url.searchParams.set('tag', tag);
        a.href = url.toString();
      } catch (e) {}
      var rel = (a.getAttribute('rel') || '').split(/\s+/);
      ['sponsored', 'nofollow', 'noopener'].forEach(function (r) {
        if (rel.indexOf(r) === -1) rel.push(r);
      });
      a.setAttribute('rel', rel.join(' ').trim());
    }
  }

  // ---- Author name and contact email ----
  function fillPeople() {
    var name = placeholder(cfg.authorName, 'Your Name');
    var email = placeholder(cfg.contactEmail, 'you@example.com');
    [].forEach.call(document.querySelectorAll('[data-author]'), function (el) { el.textContent = name; });
    [].forEach.call(document.querySelectorAll('[data-email]'), function (el) {
      el.textContent = email;
      if (el.tagName === 'A') el.href = 'mailto:' + email;
    });
  }

  // ---- AdSense: load only when a real publisher ID is set; reveal slots that have an ad-unit ID ----
  function setupAds() {
    var client = adsenseClient();
    if (!client) return; // slots stay hidden
    if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
      var s = document.createElement('script');
      s.async = true;
      s.crossOrigin = 'anonymous';
      s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + client;
      document.head.appendChild(s);
    }
    var slots = { top: slotId(cfg.adSlotTop), mid: slotId(cfg.adSlotMid) };
    [].forEach.call(document.querySelectorAll('.ad-slot[data-ad]'), function (box) {
      var id = slots[box.getAttribute('data-ad')];
      if (!id) return; // no ad-unit ID: leave hidden, Auto ads can still place ads
      var ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', client);
      ins.setAttribute('data-ad-slot', id);
      ins.setAttribute('data-ad-format', 'auto');
      ins.setAttribute('data-full-width-responsive', 'true');
      box.appendChild(ins);
      box.hidden = false;
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    });
  }

  // ---- Settings checklist (only on the checklist page) ----
  function setupChecklist() {
    var list = document.getElementById('checklist');
    if (!list) return;
    var KEY = 'setupdesk-checklist-v1';
    var boxes = [].slice.call(list.querySelectorAll('input[type=checkbox]'));
    var text = document.getElementById('progText');
    var bar = document.getElementById('progBar');
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
    boxes.forEach(function (b) { if (saved[b.id]) b.checked = true; });

    function update() {
      var done = boxes.filter(function (b) { return b.checked; }).length;
      text.textContent = done + ' of ' + boxes.length + ' done';
      bar.firstElementChild.style.width = (boxes.length ? done / boxes.length * 100 : 0) + '%';
      bar.classList.toggle('is-done', done === boxes.length && done > 0);
      [].forEach.call(list.querySelectorAll('.check-group'), function (g) {
        var gb = g.querySelectorAll('input[type=checkbox]');
        var gd = g.querySelectorAll('input[type=checkbox]:checked').length;
        var out = g.querySelector('[data-group-count]');
        if (out) out.textContent = gd + '/' + gb.length;
      });
      var s = {};
      boxes.forEach(function (b) { if (b.checked) s[b.id] = 1; });
      try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
    }
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    var reset = document.getElementById('resetBtn');
    if (reset) reset.addEventListener('click', function () {
      boxes.forEach(function (b) { b.checked = false; });
      update();
    });
    update();
  }

  function init() {
    tagAmazonLinks();
    fillPeople();
    setupAds();
    setupChecklist();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
