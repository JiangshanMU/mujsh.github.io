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

    <!-- 左侧照片 -->
    <div class="col-md-2">
      <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}"
           class="img-fluid rounded-start"
           alt="{{ member.name }}">
    </div>

    <!-- 右侧内容 -->
    <div class="col-md-10">
      <div class="card-body">

        <!-- 姓名 -->
        <h5 class="card-title mb-1">{{ member.name }}</h5>

        <!-- 职称 -->
        {% if member.title %}
        <h6 class="card-subtitle mb-2 text-muted">
          {{ member.title }}
        </h6>
        {% endif %}

        <!-- Experience -->
        {% if member.experience %}
        <h6 class="mt-2 mb-1 text-uppercase"
            style="font-size: 0.85em; letter-spacing: 0.05em;">
          Experience
        </h6>

        <ul class="mb-2"
            style="padding-left: 1rem; font-size: 0.9em; list-style-type: disc;">
          {% for exp_item in member.experience %}
          <li>{{ exp_item }}</li>
          {% endfor %}
        </ul>
        {% endif %}

        <!-- Education -->
        {% if member.education %}
        <h6 class="mt-2 mb-1 text-uppercase"
            style="font-size: 0.85em; letter-spacing: 0.05em;">
          Education
        </h6>

        <ul class="mb-2"
            style="padding-left: 1rem; font-size: 0.9em;">
          {% for edu_item in member.education %}
          <li>{{ edu_item }}</li>
          {% endfor %}
        </ul>
        {% endif %}

      </div>
    </div>

  </div>
</div>

{% endif %}
{% if member.email %}
<p class="card-text">email: <{{ member.email }}></p>
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
My name is Jiangshan Mu. I am Postdoctoral Fellow in Drew Shindell's Lab at Duke University. I hold a Ph.D. in Atmospheric Environment from the Environment Research Institute at Shandong University. My research focuses on atmospheric photochemistry in the troposphere, particularly on elucidating and modeling complex chemical processes. I apply a multidisciplinary approach that integrates machine learning, box modeling, and comprehensive field observations to advance our understanding of atmospheric chemistry. Beyond my core research, I have a strong interest in three-dimensional atmospheric modeling, which I believe offers a powerful framework for capturing the dynamic behavior of the atmosphere and enhancing our predictive capabilities in the face of environmental challenges. I am committed to using interdisciplinary tools and scientific insight to address pressing environmental problems. My goal is to contribute meaningfully to atmospheric science and support the protection of Earth’s fragile environment through rigorous, impactful research.
</small></p>


## Contact

<p>
My office is located in Nicholas School of the Environment, Duke University<br />
Grainger Hall, 9 Circuit Drive, Box 90328, Durham, NC 27708.<br />
Office: LSRCA152
</p>
