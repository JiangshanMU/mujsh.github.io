---
title: "About Me"
layout: default
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
          </div>
        </div>
      </div>
    </div>

    {% if member.bio %}
      <p style="width: 200%"><small>{{ member.bio }}</small></p>
    {% endif %}

    {% if member.education %}
      <ul style="overflow: hidden">
        {% for edu in member.education %}
          <li>{{ edu }}</li>
        {% endfor %}
      </ul>
    {% endif %}
  </div>

  {% assign number_printed = number_printed | plus: 1 %}
  {% if even_odd == 1 %}
  </div>
  {% endif %}
{% endfor %}
{% if number_printed | modulo: 2 == 1 %}
</div>
{% endif %}
