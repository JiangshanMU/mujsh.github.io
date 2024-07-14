---
title: "Jiangshan :: News"
layout: default
excerpt: "Jiangshan -- News and announcements"
sitemap: false
permalink: /allnews.html
---

# News and announcements

{% for article in site.data.news %}
<div class="event">
  <h3>
    <span class="event-title" data-image="{{ article.image }}" onclick="showImage(this)">
      {{ article.headline }}
    </span>
  </h3>
  <p>{{ article.date }}</p>
  <p>{{ article.body }}</p>
</div>
{% endfor %}

<!-- Modal for image display -->
<div id="imageModal" style="display:none; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:white; padding:20px; z-index:1000;">
  <span style="cursor:pointer; position:absolute; top:10px; right:10px;" onclick="closeImage()">X</span>
  <img id="modalImage" src="" style="max-width:100%; max-height:100%; border:none;" />
</div>

<script>
  function showImage(element) {
    var imageUrl = element.getAttribute('data-image');
    if (!imageUrl) {
      alert('Image URL not found!');
      return;
    }
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imageUrl;
    modal.style.display = 'block';
  }

  function closeImage() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
  }
</script>

<style>
  .event {
    margin-bottom: 20px;
  }
  .event-title {
    font-weight: bold;
    color: darkred;
    cursor: pointer;
  }
  #imageModal {
    border: none; /* 移除模态窗口的边框 */
  }
  #modalImage {
    border: none; /* 移除图片的边框 */
  }
</style>
