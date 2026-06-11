---
title: "Jiangshan Mu, Ph.D. | Homepage"
layout: default
excerpt: "Atmospheric chemistry, air pollution, environmental health, and exposure inequality."
sitemap: false
permalink: /
---

# Jiangshan Mu

**Postdoctoral Researcher**  
Nicholas School of the Environment, Duke University

I study atmospheric composition and its implications for air quality, environmental health, and population exposure. My work integrates ground-based observations, satellite-derived products, atmospheric models, and machine learning to quantify long-term changes in air pollution and their unequal impacts across regions and populations.

---

## About Me

<div id="newsid" class="float-md-end col-sm-3 bg-light border" style="display:block; padding: 14px; margin-left: 18px; margin-bottom: 14px; border-radius: 6px;">
<div class="well">
<h4>Latest News</h4>
<p>More updates are available on the <a href="{{ site.url }}{{ site.baseurl }}/allnews.html">news page</a>.</p>
<hr style="margin-top: 14px; margin-bottom: 8px;" />
{% for article in site.data.news limit:6 %}
<p><em>{{ article.headline }}</em><br><span>{{ article.date }}</span></p>
{% unless forloop.last %}
<hr style="margin-top: 5px; margin-bottom: 8px;" />
{% endunless %}
{% endfor %}
</div>
</div>

{% for member in site.data.team_members limit:1 %}
<div class="card mb-3 border-0" style="width: 100%; margin-bottom: 24px;">
<div class="row g-0 align-items-start">
<div class="col-md-2">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded-start" alt="{{ member.name }}">
</div>
<div class="col-md-10">
<div class="card-body pt-0">
<h5 class="card-title">
  {{ member.name }}
  <a href="{{ '/downloads/CV_Jm.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8em; margin-left: 0.5rem;">Download CV</a>
</h5>
{% if member.title %}
<h6 class="card-subtitle mb-2 text-muted">{{ member.title }}</h6>
{% endif %}
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
{% if member.email %}
<p class="card-text">
Email:
{% for mail in member.email %}
<a href="mailto:{{ mail }}">{{ mail }}</a>{% unless forloop.last %} | {% endunless %}
{% endfor %}
</p>
{% endif %}
{% if member.links %}
<p class="card-text" style="width: 100%;"><small>{% for link in member.links %}{{ link }}{% unless forloop.last %} | {% endunless %}{% endfor %}</small></p>
{% endif %}
</div>
</div>
</div>
</div>
{% endfor %}

<div style="clear: both;"></div>

## Research Profile

I am currently a postdoctoral researcher in [Prof. Drew Shindell](https://nicholas.duke.edu/people/faculty/shindell)'s group at the [Nicholas School of the Environment](https://nicholas.duke.edu), **Duke University**. I received my Ph.D. in Environmental Science from the [Environment Research Institute](https://www.hj.sdu.edu.cn/), **Shandong University**, in **June 2025**, where I was co-advised by [Prof. Likun Xue](https://faculty.sdu.edu.cn/xuelikun/zh_CN/index.htm) and [Prof. Yuqiang Zhang](https://faculty.sdu.edu.cn/~f2eaAz/zh_CN/index.htm). From January to May 2024, I conducted collaborative research as a visiting scholar at the **Universidad Politecnica de Madrid**.

My research focuses on the processes, patterns, and consequences of atmospheric pollution. A central theme of my work is to develop and apply high-resolution atmospheric datasets to examine how air pollution evolves over time, how exposure varies among populations, and how emission changes affect air quality and climate-relevant atmospheric composition.

## Research Interests

**Atmospheric composition and air pollution**  
Quantifying the spatial and temporal variability of key atmospheric pollutants, with emphasis on nitrogen oxides, ozone, particulate matter, and related chemical processes.

**Data-driven atmospheric reconstruction**  
Developing machine-learning approaches that combine satellite observations, ground measurements, meteorology, emissions, and chemical transport model outputs to reconstruct high-resolution pollutant fields.

**Exposure, inequality, and environmental health**  
Assessing long-term population exposure to air pollution and identifying disparities across regions, countries, and demographic groups.

**Air quality and climate interactions**  
Investigating how emission changes influence atmospheric composition, radiative forcing, and the coupled air-quality and climate consequences of human activities.

## Contact

I welcome research discussions and collaborations related to atmospheric chemistry, air pollution exposure, environmental health, and data-driven atmospheric science.

**Email:** [mujiangshan0615@gmail.com](mailto:mujiangshan0615@gmail.com) | [jiangshan.mu@duke.edu](mailto:jiangshan.mu@duke.edu)

**Office:** Nicholas School of the Environment, Duke University  
Grainger Hall, 9 Circuit Drive, Box 90328, Durham, NC 27708  
LSRCA152

<!-- Original homepage backup: _backup/home_2026-05-28_before-homepage-beautification.md -->