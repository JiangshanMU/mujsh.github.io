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

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">

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

<ul style="overflow: hidden">
  <li>Ph.D. in Atmospheric Environment (2021–2025), Shandong University, Qingdao, China</li>
  <li>Visiting Scholar (Jan–May 2024), Universidad Politécnica de Madrid, Spain</li>
  <li>M.Sc. in Environmental Science (2018–2021), Shandong University, Qingdao, China</li>
  <li>B.Sc. in Environmental Science (2014–2018), Ocean University of China, Qingdao, China</li>
</ul>

## Contact

<iframe
  src="https://map.baidu.com/search/%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6(%E9%9D%92%E5%B2%9B%E6%A0%A1%E5%8C%BA)/@13434831.265,4326352.12,16z?querytype=s&da_src=shareurl&wd=%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6(%E9%9D%92%E5%B2%9B%E6%A0%A1%E5%8C%BA)&c=236&src=0&wd2=%E9%9D%92%E5%B2%9B%E5%B8%82%E5%8D%B3%E5%A2%A8%E5%8C%BA&pn=0&sug=1&l=12&b=(13341933.54,4254437.34;13461741.54,4315941.34)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&sug_forward=533a74c36e163bc3b23c81fc&device_ratio=1"
  width="400"
  height="300"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

<p>
My office is located in Shandong University (Qingdao Campus)<br />
Jimo, Qingdao, Shandong Province, on the 3rd floor of K6-Ganchang Yuan.<br />
For post contact, please address me at:<br />
72 Binhai Road, Jimo, Qingdao, P.R. China<br />
Postal Code: 266237
</p>
