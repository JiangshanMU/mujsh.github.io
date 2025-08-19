---
title: "Jiangshan :: News"
layout: default
excerpt: "Jiangshan — News and announcements"
sitemap: false
permalink: /allnews.html
---

<h1 class="mt-3 mb-4">News & Announcements</h1>

<!-- 列表容器 -->
<div id="newsList" class="list-group"></div>

<!-- 分页器 -->
<nav aria-label="News pagination" class="mt-3">
  <ul id="newsPager" class="pagination justify-content-center"></ul>
</nav>

<!-- 可访问的大图弹窗 -->
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
  /* Modal */
  .news-modal {
    display: none; position: fixed; inset: 0; background: rgba(0,0,0,.8);
    z-index: 1050; align-items: center; justify-content: center; padding: 2rem;
  }
  .news-modal[aria-hidden="false"] { display: flex; }
  .news-modal__inner { max-width: 1200px; width: 100%; text-align: center; position: relative; }
  .news-modal__inner img { max-width: 100%; max-height: 80vh; border-radius: 8px; }
  .news-modal__close {
    position: absolute; top: -12px; right: -12px; border-radius: 999px; line-height: 1.2;
    padding: .2rem .55rem; box-shadow: 0 2px 10px rgba(0,0,0,.3);
  }
</style>

{%- comment -%}
  将 _data/news.yml 转为 JS 可用的数组，并处理好图片完整 URL、日期和正文（markdown→HTML）
{%- endcomment -%}
{%- assign raw = site.data.news | sort: "date" | reverse -%}
<script>
  (function () {
    const base = "{{ site.url }}{{ site.baseurl }}";
    const norm = p => (!p || /^https?:\/\//i.test(p)) ? (p || "") : (base + "/" + String(p).replace(/^\/+/, ""));

    window.NEWS_ITEMS = [
      {%- for a in raw -%}
        {%- assign img_raw   = a.image | to_s -%}
        {%- assign thumb_raw = a.thumb | default: a.image | to_s -%}
        {%- capture body_html -%}{{ a.body | markdownify }}{%- endcapture -%}
        {
          "headline": {{ a.headline | jsonify }},
          "date_iso": "{{ a.date | date_to_xmlschema }}",
          "date_disp": "{{ a.date | date: "%b %d, %Y" }}",
          "body_html": {{ body_html | strip | jsonify }},
          "image": {{ img_raw | jsonify }},
          "thumb": {{ thumb_raw | jsonify }},
          "link": {{ a.link | default: "" | jsonify }}
        }{%- if forloop.last == false -%},{%- endif -%}
      {%- endfor -%}
    ].map(d => ({
      ...d,
      image: d.image ? norm(d.image) : "",
      thumb: d.thumb ? norm(d.thumb) : ""
    }));
  })();
</script>

<script>
  // -------- 渲染逻辑（分页 + 列表 + 弹窗） --------
  (function () {
    const PAGE_SIZE = 10;

    const qs = new URLSearchParams(location.search);
    const pageFromURL = parseInt(qs.get("page") || "1", 10);
    let current = Number.isFinite(pageFromURL) && pageFromURL > 0 ? pageFromURL : 1;

    const items = (window.NEWS_ITEMS || []);
    const total = items.length;
    const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    function openNewsModal(src, caption) {
      const modal = document.getElementById('newsModal');
      const imgEl = document.getElementById('newsModalImg');
      const capEl = document.getElementById('newsModalCaption');
      imgEl.src = src; imgEl.alt = caption || "";
      capEl.textContent = caption || "";
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeNewsModal(ev) {
      const modal = document.getElementById('newsModal');
      if (!ev || ev.target === modal || ev.target.classList.contains('news-modal__close')) {
        modal.setAttribute('aria-hidden', 'true');
        document.getElementById('newsModalImg').removeAttribute('src');
        document.body.style.overflow = '';
      }
    }
    window.openNewsModal = openNewsModal;
    window.closeNewsModal = closeNewsModal;
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.getElementById('newsModal').getAttribute('aria-hidden') === 'false') {
        closeNewsModal(e);
      }
    });

    function articleHTML(d) {
      const thumb = d.thumb ? `
        <img src="${d.thumb}" alt="thumbnail for ${d.headline.replace(/"/g,'&quot;')}"
             loading="lazy"
             style="width:96px;height:96px;object-fit:cover;border-radius:8px;flex:0 0 auto;"
             ${d.image ? `role="button" tabindex="0" onclick="openNewsModal('${d.image.replace(/'/g,"\\'")}','${d.headline.replace(/'/g,"\\'")}')"` : ""} />`
        : "";

      const title = d.image
        ? `<a href="javascript:void(0)" class="text-decoration-none link-dark"
             onclick="openNewsModal('${d.image.replace(/'/g,"\\'")}','${d.headline.replace(/'/g,"\\'")}')">${d.headline}</a>`
        : d.headline;

      const more = d.link ? `<a class="small" href="${d.link}" target="_blank" rel="noopener">Read more →</a>` : "";

      return `
        <article class="list-group-item list-group-item-action py-3">
          <div class="d-flex w-100 align-items-start gap-3">
            ${thumb}
            <div class="flex-grow-1">
              <h3 class="h5 mb-1">${title}</h3>
              <p class="text-muted mb-2"><time datetime="${d.date_iso}">${d.date_disp}</time></p>
              <div class="mb-1">${d.body_html}</div>
              ${more}
            </div>
          </div>
        </article>`;
    }

    function renderPager() {
      const el = document.getElementById('newsPager');
      const mkLink = (p, label, disabled=false, active=false) => `
        <li class="page-item ${disabled ? "disabled" : ""} ${active ? "active" : ""}">
          <a class="page-link" href="${disabled ? "#" : `?page=${p}`}" ${disabled ? 'tabindex="-1" aria-disabled="true"' : ""}>${label}</a>
        </li>`;

      let html = "";
      html += mkLink(Math.max(1, current-1), "« Prev", current===1, false);

      // 简洁页码：当前页前后各 2 页
      const start = Math.max(1, current - 2);
      const end   = Math.min(pages, current + 2);
      for (let p = start; p <= end; p++) {
        html += mkLink(p, String(p), false, p===current);
      }

      html += mkLink(Math.min(pages, current+1), "Next »", current===pages, false);
      el.innerHTML = html;
    }

    function renderList() {
      const el = document.getElementById('newsList');
      const start = (current - 1) * PAGE_SIZE;
      const slice = items.slice(start, start + PAGE_SIZE);
      el.innerHTML = slice.map(articleHTML).join('') || '<div class="text-center text-muted py-5">No news yet.</div>';
    }

    // 初始渲染
    if (current > pages) current = pages;
    renderList();
    renderPager();
  })();
</script>
