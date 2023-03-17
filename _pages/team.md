---
title: "Jiangshan :: About me"
layout: default
excerpt: "Jiangshan -- About me"
sitemap: false
permalink: /team/
---

<div class="px-2 gx-2">
<!--
**We are  looking for new PhD students, Postdocs, and Master students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **!**
Jump to [staff](#staff), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), [administrative support](#administrative-support), [lab visitors](#lab-visitors).
-->


# About me


{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">

<!-- Card -->
<div class="card mb-3 border-0">
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
<p class="card-text"><small>{% for link in member.links %}{{ link }}{% unless forloop.last %} | {% endunless %}{% endfor %}</small></p>
{% endif %}
</div>
</div>
</div>
</div>

{% if member.bio %}
<p><small>{{ member.bio }}</small></p>
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

## Contact

<div class="row">
<div id="rc7-map" style="width: 450px; float: left; margin-right: 10px">
<iframe src="https://www.google.com/maps/place/%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6%E9%9D%92%E5%B2%9B%E6%A0%A1%E5%8C%BA/@36.3552623,120.6887353,17z/data=!3m1!4b1!4m6!3m5!1s0x359659f2eee4791f:0x776a63c1f1ddd4a9!8m2!3d36.355258!4d120.690924!16s%2Fg%2F11cnpw3p4n" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

My office is located in Jimo, Qingdao, Shandong Province, <br />
on the 3th floor of K6-Ganchang Yuan.

*For post contact, please address me at* <br />
72 Binhai Road, Jimo, Qingdao, P.R. China <br />
Postal Code: 266237 <br />
</div>
</div>

</div>
