---
title: "Jiangshan Mu, Ph.D. | Homepage"
layout: default
excerpt: "Atmospheric chemistry, air pollution, environmental health, and exposure inequality."
sitemap: false
permalink: /
---

# Jiangshan Mu

**Postdoctoral Fellow**  
Nicholas School of the Environment, Duke University

I train models to track our changing climate, and they train me to help humanity adapt.

---

## About Me

<div class="row align-items-stretch">
<div class="col-md-9">

{% for member in site.data.team_members limit:1 %}
<div class="card mb-3 border-0 h-100" style="width: 100%; margin-bottom: 24px;">
<div class="row g-0 align-items-start">
<div class="col-md-3">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded-start" alt="{{ member.name }}">
</div>
<div class="col-md-9">
<div class="card-body pt-0">
<h5 class="card-title">
  {{ member.name }}
  <a href="{{ '/downloads/CV_Jm.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8em; margin-left: 0.5rem;">Download CV</a>
</h5>
{% if member.title %}
<h6 class="card-subtitle mb-2 text-muted">{{ member.title }}</h6>
{% endif %}
<p class="card-text text-muted" style="font-size: 0.9em; margin-top: -4px; margin-bottom: 8px;">
Atmospheric Chemistry · Air Pollution Exposure · Machine Learning · Environmental Health
</p>
{% if member.experience %}
<h6 class="mt-2 mb-1 text-uppercase fw-bold" style="font-size: 0.85em; letter-spacing: 0.05em;">Experience</h6>
<ul class="mb-2" style="padding-left: 1rem; font-size: 0.9em; list-style-type: disc;">
{% for exp_item in member.experience %}
<li>{{ exp_item }}</li>
{% endfor %}
</ul>
{% endif %}
{% if member.education %}
<h6 class="mt-2 mb-1 text-uppercase fw-bold" style="font-size: 0.85em; letter-spacing: 0.05em;">Education</h6>
<ul class="mb-2" style="padding-left: 1rem; font-size: 0.9em;">
{% for edu_item in member.education %}
<li>{{ edu_item }}</li>
{% endfor %}
</ul>
{% endif %}
{% if member.links %}
<p class="card-text" style="width: 100%;"><small>{% for link in member.links %}{{ link }}{% unless forloop.last %} | {% endunless %}{% endfor %}</small></p>
{% endif %}
</div>
</div>
</div>
</div>
{% endfor %}

</div>
<div class="col-md-3 d-flex ps-md-1">
<div id="newsid" class="h-100" style="display:block; padding: 14px; border: 1px solid #e3e7ed; border-radius: 6px; background: #fbfcfe; width: 100%; max-width: 390px; margin-left: auto; margin-top: -50px; overflow: hidden;">
<div class="well">
<h4 style="margin-bottom: 10px; font-size: 1.25rem;">Latest News</h4>
<div style="border-top: 1px solid #e6e9ef;">
{% for article in site.data.news limit:3 %}
<div style="padding: 9px 0; border-bottom: 1px solid #e6e9ef;">
<div style="font-weight: 500; line-height: 1.25;">{{ article.headline }}</div>
<div style="margin-top: 3px; color: #6c757d; font-size: 0.85em;">{{ article.date }}</div>
</div>
{% endfor %}
</div>
<a href="{{ site.url }}{{ site.baseurl }}/allnews.html" style="display: inline-block; margin-top: 10px; font-size: 0.88em;">View all news</a>
</div>
</div>
</div>
</div>

## Research Profile

I am currently a postdoctoral researcher in [Prof. Drew Shindell](https://nicholas.duke.edu/people/faculty/shindell)'s group at the [Nicholas School of the Environment](https://nicholas.duke.edu), **Duke University**. I received my Ph.D. in Environmental Science from the [Environment Research Institute](https://www.hj.sdu.edu.cn/), **Shandong University**, in **June 2025**, where I was co-advised by [Prof. Likun Xue](https://faculty.sdu.edu.cn/xuelikun/zh_CN/index.htm) and [Prof. Yuqiang Zhang](https://faculty.sdu.edu.cn/~f2eaAz/zh_CN/index.htm). From January to May 2024, I conducted collaborative research as a visiting scholar at the **Universidad Politecnica de Madrid**.

My research focuses on the processes, patterns, and consequences of atmospheric pollution. A central theme of my work is to develop and apply high-resolution atmospheric datasets to examine how air pollution evolves over time, how exposure varies among populations, and how emission changes affect air quality and climate-relevant atmospheric composition.

## Research Interests

**Atmospheric composition and air pollution**  
Quantifying the spatial and temporal variability of atmospheric pollutants, with emphasis on nitrogen oxides, ozone, particulate matter, and related chemical processes.

**Data-driven atmospheric reconstruction**  
Developing machine-learning approaches that combine satellite observations, ground measurements, meteorology, emissions, and chemical transport model outputs to reconstruct high-resolution pollutant fields.

**Exposure, inequality, and environmental health**  
Assessing long-term population exposure to air pollution and identifying disparities across regions, countries, and demographic groups.

**Air quality and climate interactions**  
Investigating how emission changes influence atmospheric composition, radiative forcing, and the coupled air-quality and climate consequences of human activities.

## Contact

I welcome discussions and collaborations related to atmospheric chemistry, air pollution exposure, environmental health, and data-driven atmospheric science.

<table style="border-collapse: collapse; border: none; margin-top: 8px;">
{% for member in site.data.team_members limit:1 %}
{% if member.email %}
<tr style="border: none;">
<td style="border: none; padding: 0 8px 2px 0; vertical-align: top;"><strong>Email:</strong></td>
<td style="border: none; padding: 0 0 2px 0; vertical-align: top;">{% for mail in member.email %}<a href="mailto:{{ mail }}">{{ mail }}</a>{% unless forloop.last %} | {% endunless %}{% endfor %}</td>
</tr>
{% endif %}
{% endfor %}
<tr style="border: none;">
<td style="border: none; padding: 0 8px 2px 0; vertical-align: top;"><strong>Office:</strong></td>
<td style="border: none; padding: 0 0 2px 0; vertical-align: top;">Nicholas School of the Environment, Duke University<br>Grainger Hall, 9 Circuit Drive, Box 90328, Durham, NC 27708<br>LSRCA152</td>
</tr>
</table>

<!-- Original homepage backup: _backup/home_2026-05-28_before-homepage-beautification.md -->