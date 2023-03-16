---
title: "Jiangshan Mu's Website == Welcome!"
layout: default
excerpt: "Welcome to Jiangshan's Home!"
sitemap: false
permalink: /
---

# Welcome to Jiangshan's Home

<div id="newsid" class="float-md-end col-sm-4 bg-light border" style="display:block; padding-top: 20px" >
<div class="well">
<h4>Latest News</h4>
<p>(Find out more at the <a href="{{ site.url }}{{ site.baseurl }}/allnews.html">news page</a>.)</p>
<hr style="margin-top: 22px; margin-bottom: 8px;" />
{% for article in site.data.news limit:6 %}
<p>
<em>{{ article.headline }}</em> ({{ article.date }})</p>
{% unless forloop.last %}
<hr style="margin-top: 5px; margin-bottom: 8px;" />
{% endunless %}
{% endfor %}
</div>
</div>

Hello, my name is Jiangshan Mu and I am a Ph.D. candidate in atmospheric environment at [Environment Research Institute](https://www.hj.sdu.edu.cn/), Shandong University, supervised by [Prof. Xue Li-kun](https://www.hj.sdu.edu.cn/info/1015/1532.htm) and [Prof. Zhang Yu-qiang](https://faculty.sdu.edu.cn/~f2eaAz/zh_CN/index.htm).  

My research interests lie in studying the interactions between the atmosphere and the environment, including tropospheric ozone, VOCs, reactive halogen species, wildfires and subsidence, based mainly on machine learning, box models, and observations. etc.

During my graduate studies, I have participated in many field work experiments, including high-mountain observations and aircraft measurements, etc.

<!-- Carousel -->
<div id="home-carousel" class="carousel slide col-sm-7 ms-me-auto" data-bs-ride="carousel">
<div class="carousel-indicators">
<button type="button" data-bs-target="#home-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#home-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#home-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
<button type="button" data-bs-target="#home-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
<button type="button" data-bs-target="#home-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
<button type="button" data-bs-target="#home-carousel" data-bs-slide-to="5" aria-label="Slide 7"></button>
<button type="button" data-bs-target="#home-carousel" data-bs-slide-to="6" aria-label="Slide 8"></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">
<img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/STOTEN.png" class="d-block w-100" alt="fMRIPrep & tools" />
</div>
<div class="carousel-item">
<img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/JESZM.jpg" class="d-block w-100" alt="fMRIPrep workflow">
</div>
<div class="carousel-item">
<img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/jgrzyn.jpg" class="d-block w-100" alt="QA/QC of MRI data & MRIQC">
</div>
<div class="carousel-item">
<img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/acpzyn.png" class="d-block w-100" alt="Neuroimaging methods development">
</div>
<div class="carousel-item">
<img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/STOTENLYH.jpg" class="d-block w-100" alt="Reliabilty of MRI measurements">
</div>
<div class="carousel-item">
<img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/JESJYR.jpg" class="d-block w-100" alt="TemplateFlow -- neuroimaging templates and atlases">
</div>
<div class="carousel-item">
<img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/acsyc.jpeg" class="d-block w-100" alt="MRIQC -- Visual reports">
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>

I am fortunate and grateful that science exists in this world, as it has brought me the life I have always dreamed of. It is an endless pursuit, towering above and delving into the depths, requiring great effort and dedication over many years. The most poetic and romantic life I can imagine is one spent on a journey in search of truth.


If you have any interests or topics related to science or any other field, please feel free to contact me. I am always eager to engage in discussions and exchange ideas with others. You can reach me at my email address, <span style="color: #00008B;"><b>mujsh@mail.sdu.edu.cn</b></span>. Whether it's a question, an idea, or just a conversation starter, I am happy to hear from you and explore together. Let's share our passion for learning and discovery and see where it takes us!


