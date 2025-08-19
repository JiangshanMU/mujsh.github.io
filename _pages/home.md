---
title: "Jiangshan Mu, Ph.D. | Homepage"
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

Hello, my name is **Jiangshan Mu**, and I received my Ph.D. in Environmental Science from the [Environment Research Institute](https://www.hj.sdu.edu.cn/), Shandong University in **June 2025**. I was co-advised by [Prof. Li-kun Xue](https://www.hj.sdu.edu.cn/info/1015/1532.htm) and [Prof. Yuqiang Zhang](https://faculty.sdu.edu.cn/~f2eaAz/zh_CN/index.htm). I will begin my postdoctoral research at **Duke University (USA)** in **November 2025**.

My research focuses on the interactions between atmospheric composition and environmental health. I am particularly interested in:

- **Global inequalities in pollutant exposure and health impacts**
- **Atmospheric data reconstruction using machine learning**
- **Urbanization and environmental justice**

I have developed **high-resolution NO₂ datasets (2005–2023)** using Transformer-based models and analyzed disparities in exposure across countries and income levels. I also explore how **extreme events** such as wildfires affect atmospheric nitrogen deposition using machine learning and atmospheric models.

During my doctoral training, I participated in several field campaigns, including **high-altitude mountain observations** and **aircraft-based measurements**. From January to May 2024, I conducted collaborative research as a visiting scholar at the **Universidad Politécnica de Madrid**, focusing on machine learning applications in extreme event attribution.

I am deeply inspired by the pursuit of science. It is a journey of exploring the unknown, requiring persistence, curiosity, and humility. The most poetic and meaningful life I can imagine is one spent seeking truth.

If you are interested in collaboration, academic exchange, or simply a conversation, feel free to contact me at  
📧 <a href="mailto:mujsh@mail.sdu.edu.cn"><strong>mujsh@mail.sdu.edu.cn</strong></a>.  
Let’s explore, discover, and grow together.

<!-- Carousel (currently disabled)
<div id="home-carousel" class="carousel slide col-sm-7 ms-me-auto" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#home-carousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/STOTEN.png" class="d-block w-100" alt="STOTEN" />
    </div>
    <div class="carousel-item">
      <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/JESZM.jpg" class="d-block w-100" alt="JESZM">
    </div>
    <div class="carousel-item">
      <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/jgrzyn.jpg" class="d-block w-100" alt="JGRZYN">
    </div>
    <div class="carousel-item">
      <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/acpzyn.png" class="d-block w-100" alt="ACPZYN">
    </div>
    <div class="carousel-item">
      <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/STOTENLYH.jpg" class="d-block w-100" alt="STOTENLYH">
    </div>
    <div class="carousel-item">
      <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/JESJYR.jpg" class="d-block w-100" alt="JESJYR">
    </div>
    <div class="carousel-item">
      <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/acsyc.jpeg" class="d-block w-100" alt="ACSY">
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
-->
