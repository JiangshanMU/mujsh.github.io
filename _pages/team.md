---
title: "About me"
layout: default
excerpt: "Jiangshan Mu - About me"
sitemap: false
permalink: /aboutme/
---

# About me


{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-10 clearfix">

<!-- Card -->
<div class="card mb-3 border-0" style="width: 100%">
<div class="row g-0">
<div class="col-md-2">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded-start" alt="{{ member.name }}">
</div>
<div class="col-md-10">
<div class="card-body">
<h5 class="card-title">
  {{ member.name }}
  <a href="{{ '/downloads/CV_Jm.pdf' | relative_url }}" 
     target="_blank" 
     rel="noopener noreferrer"
     style="font-size: 0.8em; margin-left: 0.5rem;">
    Download CV
  </a>
</h5>
{% if member.title %}
<h6 class="card-subtitle mb-2 text-muted">{{ member.title }}</h6>
{% endif %}
{% if member.experience %}
 <h6 class="mt-2 mb-1 text-uppercase fw-bold"
    style="font-size: 0.85em; letter-spacing: 0.05em;">
  Experience
 </h6>
 <ul class="mb-2" style="padding-left: 1rem; font-size: 0.9em; list-style-type: disc;">
   {% for exp_item in member.experience %}
   <li>{{ exp_item }}</li>
   {% endfor %}
 </ul>
{% endif %}
{% if member.education %}
 <h6 class="mt-2 mb-1 text-uppercase fw-bold"
    style="font-size: 0.85em; letter-spacing: 0.05em;">
  Education
 </h6>
 <ul class="mb-2" style="padding-left: 1rem; font-size: 0.9em;">
   {% for edu_item in member.education %}
   <li>{{ edu_item }}</li>
   {% endfor %}
</ul>
{% endif %}
{% if member.email %}
<p class="card-text">
email:
{% for mail in member.email %}
  <{{ mail }}>{% unless forloop.last %} | {% endunless %}
{% endfor %}
</p>
{% endif %}
{% if member.links %}
<p class="card-text" style="width: 100%"><small>{% for link in member.links %}{{ link }}{% unless forloop.last %} | {% endunless %}{% endfor %}</small></p>
{% endif %}
</div>
</div>
</div>
</div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
<p style="width: 100%"><small>
My name is Jiangshan Mu. I am a Postdoctoral Fellow in Drew Shindell’s Lab at Duke University. I received my Ph.D. in Atmospheric Environment from the Institute of Environmental Research at Shandong University.<br>
My research focuses on the spatiotemporal variability, sources, and impacts of tropospheric air pollutants, with particular emphasis on atmospheric photochemistry, air pollution, and climate interactions. I combine field observations, satellite products, chemical transport models, and data-driven methods to investigate atmospheric composition and the processes that shape it. My recent work includes the development of high-resolution long-term pollutant datasets, analyses of population exposure and inequality, and the interpretation of atmospheric processes using explainable machine learning frameworks.<br>
I am also interested in three-dimensional atmospheric modeling as a tool for understanding the dynamic behavior of the atmosphere and for improving the quantification of emissions, chemistry, and transport. More broadly, I aim to use interdisciplinary approaches to address important environmental questions and to advance rigorous, impactful research in atmospheric science.
</small></p>


## Contact

<p>
My office is located in Nicholas School of the Environment, Duke University<br />
Grainger Hall, 9 Circuit Drive, Box 90328, Durham, NC 27708.<br />
Office: LSRCA152
</p>
