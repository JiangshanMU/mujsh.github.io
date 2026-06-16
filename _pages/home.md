---
title: "Jiangshan Mu, Ph.D. | Homepage"
layout: default
excerpt: "Atmospheric chemistry, air pollution, environmental health, and exposure inequality."
sitemap: false
permalink: /
---

<h1>Jiangshan Mu</h1>

<p><strong>Postdoctoral Fellow</strong><br>
Nicholas School of the Environment, Duke University</p>

<p>I train models to track our changing climate, and they train me to help humanity adapt.</p>

<div class="homepage-tags">
  <span>Atmospheric Chemistry</span>
  <span>Air Pollution Exposure</span>
  <span>Machine Learning</span>
  <span>Environmental Health</span>
</div>

<div class="currently-box">
  <strong>Currently:</strong> developing high-resolution atmospheric datasets and data-driven methods for air pollution exposure and climate-relevant atmospheric composition.
</div>

<hr>

<h2>About Me</h2>

<div class="row align-items-stretch homepage-top-row">
  <div class="col-md-9">
    {% for member in site.data.team_members limit:1 %}
    <div class="card mb-3 border-0 h-100 profile-card">
      <div class="row g-0 align-items-start">
        <div class="col-md-3">
          <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid profile-photo" alt="{{ member.name }}">
        </div>
        <div class="col-md-9">
          <div class="card-body pt-0 profile-card-body">
            <h5 class="card-title profile-name">
              {{ member.name }}
              <a class="btn-cv" href="{{ '/downloads/CV_Jm.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Download CV</a>
            </h5>
            {% if member.title %}
            <h6 class="card-subtitle mb-2 text-muted">{{ member.title }}</h6>
            {% endif %}
            {% if member.experience %}
            <h6 class="profile-section-title">Experience</h6>
            <ul class="profile-list">
              {% for exp_item in member.experience %}
              <li>{{ exp_item }}</li>
              {% endfor %}
            </ul>
            {% endif %}
            {% if member.education %}
            <h6 class="profile-section-title">Education</h6>
            <ul class="profile-list">
              {% for edu_item in member.education %}
              <li>{{ edu_item }}</li>
              {% endfor %}
            </ul>
            {% endif %}
            {% if member.links %}
            <p class="card-text profile-links"><small>{% for link in member.links %}{{ link }}{% unless forloop.last %} | {% endunless %}{% endfor %}</small></p>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

  <div class="col-md-3 d-flex ps-md-1">
    <div id="newsid" class="news-card">
      <div class="well">
        <h4>Latest News</h4>
        <p class="news-note">Selected recent updates. More items are available on the <a href="{{ site.url }}{{ site.baseurl }}/allnews.html">news page</a>.</p>
        <div class="news-list">
          {% for article in site.data.news limit:3 %}
          <div class="news-item">
            <p class="news-headline">{{ article.headline }}</p>
            <p class="news-date">{{ article.date }}</p>
          </div>
          {% endfor %}
        </div>
        <a class="news-more" href="{{ site.url }}{{ site.baseurl }}/allnews.html">View all news</a>
      </div>
    </div>
  </div>
</div>

<h2>Research Profile</h2>

<p>I am currently a postdoctoral researcher in <a href="https://nicholas.duke.edu/people/faculty/shindell">Prof. Drew Shindell</a>'s group at the <a href="https://nicholas.duke.edu">Nicholas School of the Environment</a>, <strong>Duke University</strong>. I received my Ph.D. in Environmental Science from the <a href="https://www.hj.sdu.edu.cn/">Environment Research Institute</a>, <strong>Shandong University</strong>, in <strong>June 2025</strong>, where I was co-advised by <a href="https://faculty.sdu.edu.cn/xuelikun/zh_CN/index.htm">Prof. Likun Xue</a> and <a href="https://faculty.sdu.edu.cn/~f2eaAz/zh_CN/index.htm">Prof. Yuqiang Zhang</a>. From January to May 2024, I conducted collaborative research as a visiting scholar at the <strong>Universidad Politecnica de Madrid</strong>.</p>

<p>My work develops high-resolution atmospheric datasets and data-driven methods to examine how air pollution evolves over time, how exposure varies across populations, and how emission changes affect air quality and climate-relevant atmospheric composition.</p>

<h2>Research Interests</h2>

<div class="interest-grid">
  <div class="interest-card">
    <h5>Atmospheric composition and air pollution</h5>
    <p>Quantifying the spatial and temporal variability of atmospheric pollutants, with emphasis on nitrogen oxides, ozone, particulate matter, and related chemical processes.</p>
  </div>
  <div class="interest-card">
    <h5>Data-driven atmospheric reconstruction</h5>
    <p>Developing machine-learning approaches that combine satellite observations, ground measurements, meteorology, emissions, and chemical transport model outputs to reconstruct high-resolution pollutant fields.</p>
  </div>
  <div class="interest-card">
    <h5>Exposure, inequality, and environmental health</h5>
    <p>Assessing long-term population exposure to air pollution and identifying disparities across regions, countries, and demographic groups.</p>
  </div>
  <div class="interest-card">
    <h5>Air quality and climate interactions</h5>
    <p>Investigating how emission changes influence atmospheric composition, radiative forcing, and the coupled air-quality and climate consequences of human activities.</p>
  </div>
</div>

<h2>Contact</h2>

<p>I welcome discussions and collaborations related to atmospheric chemistry, air pollution exposure, environmental health, and data-driven atmospheric science.</p>

<table class="contact-table">
  {% for member in site.data.team_members limit:1 %}
  {% if member.email %}
  <tr>
    <td><strong>Email:</strong></td>
    <td>{% for mail in member.email %}<a href="mailto:{{ mail }}">{{ mail }}</a>{% unless forloop.last %} | {% endunless %}{% endfor %}</td>
  </tr>
  {% endif %}
  {% endfor %}
  <tr>
    <td><strong>Office:</strong></td>
    <td>Nicholas School of the Environment, Duke University<br>Grainger Hall, 9 Circuit Drive, Box 90328, Durham, NC 27708<br>LSRCA152</td>
  </tr>
</table>

<!-- Original homepage backup: _backup/home_2026-05-28_before-homepage-beautification.md -->