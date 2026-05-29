---
title: "About me"
layout: default
excerpt: "Jiangshan Mu - About me"
sitemap: false
permalink: /aboutme/
---

# About me

{% for member in site.data.team_members %}

<div class="card mb-4 border-0" style="width: 100%;">
  <div class="row g-4 align-items-start">
    <div class="col-md-3 col-lg-2">
      <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded" alt="{{ member.name }}" style="width:100%; max-width:190px;">
    </div>

    <div class="col-md-9 col-lg-10">
      <div class="card-body p-0">
        <h4 class="card-title mb-1">{{ member.name }}</h4>
        {% if member.title %}
        <p class="text-muted mb-2">{{ member.title }}</p>
        {% endif %}

        <p class="mb-2">
          <a href="{{ '/downloads/CV_Jm.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Download CV</a>
        </p>

        {% if member.experience %}
        <h6 class="mt-3 mb-1 text-uppercase fw-bold" style="font-size: 0.85em; letter-spacing: 0.05em;">Current position</h6>
        <ul class="mb-2" style="padding-left: 1.2rem;">
          {% for exp_item in member.experience %}
          <li>{{ exp_item }}</li>
          {% endfor %}
        </ul>
        {% endif %}

        {% if member.education %}
        <h6 class="mt-3 mb-1 text-uppercase fw-bold" style="font-size: 0.85em; letter-spacing: 0.05em;">Education</h6>
        <ul class="mb-2" style="padding-left: 1.2rem;">
          {% for edu_item in member.education %}
          <li>{{ edu_item }}</li>
          {% endfor %}
        </ul>
        {% endif %}

        {% if member.email %}
        <h6 class="mt-3 mb-1 text-uppercase fw-bold" style="font-size: 0.85em; letter-spacing: 0.05em;">Email</h6>
        <p class="mb-2">
          {% for mail in member.email %}
          {{ mail }}{% unless forloop.last %} | {% endunless %}
          {% endfor %}
        </p>
        {% endif %}

        {% if member.links %}
        <h6 class="mt-3 mb-1 text-uppercase fw-bold" style="font-size: 0.85em; letter-spacing: 0.05em;">Profiles</h6>
        <p class="mb-0">
          {% for link in member.links %}{{ link }}{% unless forloop.last %} | {% endunless %}{% endfor %}
        </p>
        {% endif %}
      </div>
    </div>
  </div>
</div>

{% endfor %}

## Biography

My name is Jiangshan Mu. I am a Postdoctoral Fellow in Drew Shindell Lab at Duke University. I received my Ph.D. in Atmospheric Environment from the Institute of Environmental Research at Shandong University.

My research focuses on the spatiotemporal variability, sources, and impacts of tropospheric air pollutants, with emphasis on atmospheric photochemistry, air pollution, and climate interactions. I combine field observations, satellite products, chemical transport models, and data-driven methods to investigate atmospheric composition and the processes that shape it.

My recent work includes the development of high-resolution long-term pollutant datasets, analyses of population exposure and inequality, and the interpretation of atmospheric processes using explainable machine learning frameworks. I am also interested in three-dimensional atmospheric modeling for understanding atmospheric dynamics and improving the quantification of emissions, chemistry, and transport.

## Contact

**Office:** LSRC A152  
**Institution:** Nicholas School of the Environment, Duke University  
**Address:** Grainger Hall, 9 Circuit Drive, Box 90328, Durham, NC 27708, USA  
**Email:** jiangshan.mu@duke.edu | mujiangshan0615@gmail.com
