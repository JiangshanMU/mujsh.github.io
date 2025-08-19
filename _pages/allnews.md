---
title: "Jiangshan :: News"
layout: default
excerpt: "Jiangshan — News and announcements"
sitemap: false
permalink: /allnews.html
---

<h1 class="mt-3 mb-4">News & Announcements</h1>

{%- assign items = site.data.news | sort: "date" | reverse -%}

<div class="list-group">
  {%- for article in items -%}
    {%- comment -%}
      统一处理图片 URL：
      1) 若以 http 开头，直接用；
      2) 否则拼接成站内绝对路径。
    {%- endcomment -%}
    {%- assign img_raw   = article.image | to_s -%}
    {%- assign thumb_raw = article.thumb | default: article.image | to_s -%}
    {%- assign has_img   = img_raw != "" -%}
    {%- assign has_thumb = thumb_raw != "" -%}

    {%- assign img = img_raw -%}
    {%- if has_img and img_raw contains "http" == false -%}
      {%- assign img = site.url | append: site.baseurl | append: "/" | append: img_raw | replace: "//", "/" -%}
    {%- endif -%}

    {%- assign thumb = thumb_raw -%}
    {%- if has_thumb and thumb_raw contains "http" == false -%}
      {%- assign thumb = site.url | append: site.baseurl | append: "/" | append: thumb_raw | replace: "//", "/" -%}
    {%- endif -%}

    <article class="list-group-item list-group-item-action py-3">
      <div class="d-flex w-100 align-items-start gap-3">
        {%- if has_thumb -%}
          <img
            src="{{ thumb }}"
            alt="thumbnail for {{ article.headline | escape }}"
            loading="lazy"
            style="width:96px;height:96px;object-fit:cover;border-radius:8px;flex:0 0 auto;"
            {%- if has_img -%} role="button" tabindex="0" onclick="openNewsModal('{{ img | escape }}','{{ article.headline | escape }}')" onkeypress="if(event.key==='Enter'){openNewsModal('{{ img | escape }}','{{ article.headline | escape }}')}" {%- endif -%}
          />
        {%- endif -%}

        <div class="flex-grow-1">
          <h3 class="h5 mb-1">
            {%- if has_img -%}
              <a href="javascript:void(0)" class="text-decoration-none link-dark"
                 onclick="openNewsModal('{{ img | escape }}','{{ article.headline | escape }}')">
                {{ article.headline }}
              </a>
            {%- else -%}
              {{ article.headline }}
            {%- endif -%}
          </h3>

          <p class="text-muted mb-2">
            {%- if article.date -%}
              <time datetime="{{ article.date | date_to_xmlschema }}">
                {{ article.date | date: "%b %d, %Y" }}
              </time>
            {%- endif -%}
          </p>

          <div class="mb-1">
            {{ article.body | markdownify }}
          </div>

          {%- if article.link -%}
            <a class="small" href="{{ article.link }}" target="_blank" rel="noopener">
              Read more →
            </a>
          {%- endif -%}
        </div>
      </div>
    </article>
  {%- endfor -%}
</div>

<!-- Accessible Image Modal -->
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
    display: none;
    position: fixed; inset: 0;
    background: rgba(0,0,0,.8);
    z-index: 1050;
    align-items: center; justify-content: center;
    padding: 2rem;
  }
  .news-modal[aria-hidden="false"] { display: flex; }
  .news-modal__inner { max-width: 1200px; width: 100%; text-align: center; position: relative; }
  .news-modal__inner img { max-width: 100%; max-height: 80vh; border-radius: 8px; }
  .news-modal__close {
    position: absolute; top: -12px; right: -12px;
    border-radius: 999px; line-height: 1.2; padding: .2rem .55rem;
    box-shadow: 0 2px 10px rgba(0,0,0,.3);
  }
</style>

<script>
  (function() {
    const modal   = document.getElementById('newsModal');
    const imgEl   = document.getElementById('newsModalImg');
    const capEl   = document.getElementById('newsModalCaption');

    window.openNewsModal = function(src, caption) {
      imgEl.src = src;
      imgEl.alt = caption || "";
      capEl.textContent = caption || "";
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    window.closeNewsModal = function(ev) {
      // 仅在点击空白/关闭按钮时关闭（避免点击图片误关）
      if (!ev || ev.target === modal || ev.target.classList.contains('news-modal__close')) {
        modal.setAttribute('aria-hidden', 'true');
        imgEl.removeAttribute('src');
        document.body.style.overflow = '';
      }
    };

    // Esc 键关闭
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
        closeNewsModal(e);
      }
    });
  })();
</script>
