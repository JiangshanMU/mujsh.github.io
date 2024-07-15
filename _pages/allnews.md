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
<div id="imageModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:1000; display:flex; align-items:center; justify-content:center; overflow:auto;" onclick="closeImage()">
  <img id="modalImage" src="" style="max-width:90%; max-height:90%; border:none;" onclick="event.stopPropagation();" />
</div>

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

<script>
  document.addEventListener('DOMContentLoaded', function() {
    function showImage(element) {
      var imageUrl = element.getAttribute('data-image');
      if (!imageUrl) {
        alert('Image URL not found!');
        return;
      }
      var modal = document.getElementById('imageModal');
      var modalImage = document.getElementById('modalImage');
      modalImage.src = imageUrl;
      modal.style.display = 'flex';
    }

    function closeImage() {
      var modal = document.getElementById('imageModal');
      modal.style.display = 'none';
    }

    // Assign functions to global scope to be accessible from HTML
    window.showImage = showImage;
    window.closeImage = closeImage;
  });
</script>
