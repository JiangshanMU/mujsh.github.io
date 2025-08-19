---
title: "Jiangshan :: News"
layout: default
excerpt: "Jiangshan — News and announcements"
sitemap: false
permalink: /allnews.html
---

# News & Announcements

<!-- 用 JSON 注入数据，避免被 Markdown/Liquid 转义 -->
<script id="news-data" type="application/json">
{{ site.data.news | jsonify }}
</script>

<!-- 列表容器 -->
<div id="newsList" class="list-group"></div>

<!-- 分页器 -->
<nav aria-label="News pagination" class="mt-3">
  <ul id="newsPager" class="pagination justify-content-center"></ul>
</nav>

<!-- 大图弹窗 -->
<div id="newsModal" class="news-modal" aria-hidden="true" role="dialog" aria-label="News image modal" onclick="closeNewsModal(event)">
  <div class="news-modal__inner" role="document">
    <button type="button" class="btn btn-light btn-sm news-modal__close" aria-label="Close" onclick="closeNewsModal(event)">×</button>
    <img id="newsModalImg" alt="" />
    <div id="newsModalCaption" class="small text-muted mt-2"></div>
  </div>
</div>

<style>
  .list-group-item { border: 1px solid rgba(0,0,0,.08); border-radius: 12px; margin-bottom: .75rem; }
  .list-group-item:hover { background: #fafafa; }
  .news-modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,.8); z-index:1050; align-items:center; justify-content:center; padding:2rem; }
  .news-modal[aria-hidden="false"] { display:flex; }
  .news-modal__inner { max-width:1200px; width:100%; text-align:center; position:relative; }
  .news-modal__inner img { max-width:100%; max-height:80vh; border-radius:8px; }
  .news-modal__close { position:absolute; top:-12px; right:-12px; border-radius:999px; line-height:1.2; padding:.2rem .55rem; box-shadow:0 2px 10px rgba(0,0,0,.3); }
</style>

<script>
(function () {
  // ---- 工具函数 ----
  const BASE = "{{ site.url }}{{ site.baseurl }}".replace(/\/+$/,'');
  const isAbs = (p) => /^(https?:)?\/\//i.test(p);
  const norm  = (p) => {
    p = (p || '').trim();
    if (!p) return '';
    return isAbs(p) ? p : BASE + '/' + p.replace(/^\/+/, '');
  };
  const fmtDate = (s) => {
    try { const d = new Date(s); if (!isNaN(d)) return d.toLocaleDateString('en-US',{year:'numeric',month:'short',day:'2-digit'}); }
    catch(_) {}
    return String(s || '');
  };

  // ---- 读取数据并按日期倒序 ----
  const rawJson = document.getElementById('news-data').textContent;
  const data = JSON.parse(rawJson || '[]')
    .map(x => ({ ...x }))
    .sort((a,b) => new Date(b.date) - new Date(a.date));

  // ---- 分页 ----
  const PAGE_SIZE = 10;
  const qs = new URLSearchParams(location.search);
  let current = Math.max(1, parseInt(qs.get('page') || '1', 10) || 1);
  const pages = Math.max(1, Math.ceil(data.length / PAGE_SIZE));

  // ---- 渲染一条 ----
  function articleHTML(d) {
    const img   = norm(d.image || '');
    const thumb = norm(d.thumb || d.image || '');
    const dateDisp = fmtDate(d.date);

    const thumbHTML = thumb ? `
      <img src="${thumb}" alt="thumbnail for ${String(d.headline||'').replace(/"/g,'&quot;')}"
           loading="lazy"
           style="width:96px;height:96px;object-fit:cover;border-radius:8px;flex:0 0 auto;"
           ${img ? `role="button" tabindex="0" onclick="openNewsModal('${img.replace(/'/g,"\\'")}','${String(d.headline||'').replace(/'/g,"\\'")}')"` : ''} />`
      : '';

    const titleHTML = img
      ? `<a href="javascript:void(0)" class="text-decoration-none link-dark"
           onclick="openNewsModal('${img.replace(/'/g,"\\'")}','${String(d.headline||'').replace(/'/g,"\\'")}')">${d.headline||''}</a>`
      : (d.headline || '');

    const more = d.link ? `<a class="small" href="${d.link}" target="_blank" rel="noopener">Read more →</a>` : '';
    const body = d.body_html || d.body || '';

    return `
      <article class="list-group-item list-group-item-action py-3">
        <div class="d-flex w-100 align-items-start gap-3">
          ${thumbHTML}
          <div class="flex-grow-1">
            <h3 class="h5 mb-1">${titleHTML}</h3>
            <p class="text-muted mb-2"><time>${dateDisp}</time></p>
            <div class="mb-1">${body}</div>
            ${more}
          </div>
        </div>
      </article>`;
  }

  // ---- 渲染列表 & 分页器 ----
  function renderList() {
    const el = document.getElementById('newsList');
    el.innerHTML = '';
    const start = (current - 1) * PAGE_SIZE;
    const slice = data.slice(start, start + PAGE_SIZE);
    if (slice.length === 0) { el.innerHTML = '<div class="text-center text-muted py-5">No news yet.</div>'; return; }
    slice.forEach(d => el.insertAdjacentHTML('beforeend', articleHTML(d)));
  }
  function renderPager() {
    const el = document.getElementById('newsPager');
    const mk = (p, label, disabled=false, active=false) => `
      <li class="page-item ${disabled?'disabled':''} ${active?'active':''}">
        <a class="page-link" href="${disabled ? '#' : `?page=${p}`}">${label}</a>
      </li>`;
    let html = '';
    html += mk(Math.max(1, current-1), '« Prev', current===1, false);
    const start = Math.max(1, current-2);
    const end   = Math.min(pages, current+2);
    for (let p = start; p <= end; p++) html += mk(p, String(p), false, p===current);
    html += mk(Math.min(pages, current+1), 'Next »', current===pages, false);
    el.innerHTML = html;
  }

  // ---- 弹窗 ----
  window.openNewsModal = function(src, caption){
    const modal = document.getElementById('newsModal');
    const imgEl = document.getElementById('newsModalImg');
    const capEl = document.getElementById('newsModalCaption');
    imgEl.src = src; imgEl.alt = caption || '';
    capEl.textContent = caption || '';
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  };
  window.closeNewsModal = function(ev){
    const modal = document.getElementById('newsModal');
    if (!ev || ev.target === modal || ev.target.classList.contains('news-modal__close')) {
      modal.setAttribute('aria-hidden','true');
      document.getElementById('newsModalImg').removeAttribute('src');
      document.body.style.overflow = '';
    }
  };
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('newsModal').getAttribute('aria-hidden') === 'false') {
      window.closeNewsModal(e);
    }
  });

  // ---- 初始化 ----
  if (current > pages) current = pages;
  renderList();
  renderPager();
})();
</script>
