---
title: "About me"
layout: default
excerpt: "Mu Jiangshan - About me"
sitemap: false
permalink: /team/
---

# About me


{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-12 clearfix">

<!-- Card -->
<div class="card mb-3 border-0" style="width: 100%">
<div class="row g-0">
<div class="col-md-4">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded-start" alt="{{ member.name }}">
</div>
<div class="col-md-8">
<div class="card-body">
<h5 class="card-title">{{ member.name }}</h5>
{% if member.title %}
<h6 class="card-subtitle mb-2 text-muted">{{ member.title }}</h6>
{% endif %}
{% if member.education %}
 <ul class="mb-2" style="padding-left: 1rem; font-size: 0.9em;">
   {% for edu_item in member.education %}
   <li>{{ edu_item }}</li>
   {% endfor %}
</ul>
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

{% if member.bio %}
<p style="width: 200%"><small>{{ member.bio }}</small></p>
{% endif %}

{% if member.education %}
<ul style="overflow: hidden">
{% for edu_item in member.education %}
<li> {{ edu_item }} </li>
{% endfor %}
</ul>
{% endif %}
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
My name is Mu Jiangshan. I hold a Ph.D. in Atmospheric Environment from the Environmental Research Institute at Shandong University, where I was supervised by Professors Li-kun Xue and Yuqiang Zhang. My research focuses on atmospheric photochemistry in the troposphere, particularly on elucidating and modeling complex chemical processes. I apply a multidisciplinary approach that integrates machine learning, box modeling, and comprehensive field observations to advance our understanding of atmospheric chemistry. Beyond my core research, I have a strong interest in three-dimensional atmospheric modeling, which I believe offers a powerful framework for capturing the dynamic behavior of the atmosphere and enhancing our predictive capabilities in the face of environmental challenges. I am committed to using interdisciplinary tools and scientific insight to address pressing environmental problems. My goal is to contribute meaningfully to atmospheric science and support the protection of Earth’s fragile environment through rigorous, impactful research.
</small></p>


## Contact

<p>
My office is located in Shandong University (Qingdao Campus)<br />
Jimo, Qingdao, Shandong Province, on the 3rd floor of K6-Ganchang Yuan.<br />
For post contact, please address me at:<br />
72 Binhai Road, Jimo, Qingdao, P.R. China<br />
Postal Code: 266237
</p>
