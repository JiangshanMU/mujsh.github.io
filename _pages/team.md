---
title: "Jiangshan :: About me"
layout: default
excerpt: "Jiangshan -- About me"
permalink: /team/
---

# About me

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

<div class="row">
  <div class="col-sm-4">
    <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded-start" alt="{{ member.name }}">
  </div>

  <div class="col-sm-8">
    <h5 class="card-title">{{ member.name }}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{ member.title }}</h6>

    {% if member.email %}
    <p class="card-text">Email: <a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
    {% endif %}

    {% if member.links %}
    <p class="card-text" style="width: 100%">
      <small>
        {% for link in member.links %}
          {{ link }}{% unless forloop.last %} | {% endunless %}
        {% endfor %}
      </small>
    </p>
    {% endif %}

    {% if member.bio %}
    <p><small>{{ member.bio }}</small></p>
    {% endif %}

    {% if member.education %}
    <ul>
      {% for edu_item in member.education %}
        <li>{{ edu_item }}</li>
      {% endfor %}
    </ul>
    {% endif %}
  </div>
</div>

<hr />
{% endfor %}
