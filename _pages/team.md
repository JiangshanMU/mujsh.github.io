---
title: "About me"
layout: default
excerpt: "Mu Jiangshan - About me"
sitemap: false
permalink: /team/
---

# About me

{% for member in site.data.team_members %}

<div class="card mb-4 border-0" style="max-width: 100%;">
  <div class="row g-0">

    <!-- Photo Left -->
    <div class="col-md-4 d-flex align-items-center justify-content-center">
      <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-fluid rounded-start" alt="{{ member.name }}" style="max-height: 300px;">
    </div>

    <!-- Info Right -->
    <div class="col-md-8">
      <div class="card-body">

        <!-- Education first -->
        {% if member.education %}
          <ul class="card-text" style="padding-left: 1.2em; margin-bottom: 1rem;">
            {% for edu_item in member.education %}
              <li style="margin-bottom: 0.3em;">{{ edu_item }}</li>
            {% endfor %}
          </ul>
        {% endif %}

        <!-- Name & Title -->
        <h5 class="card-title">{{ member.name }}</h5>
        {% if member.title %}
          <h6 class="card-subtitle mb-2 text-muted">{{ member.title }}</h6>
        {% endif %}

        <!-- Email -->
        {% if member.email %}
          <p class="card-text">Email: <a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
        {% endif %}

        <!-- Links -->
        {% if member.links %}
          <p class="card-text">
            <small>
              {% for link in member.links %}
                {{ link }}{% unless forloop.last %} | {% endunless %}
              {% endfor %}
            </small>
          </p>
        {% endif %}

        <!-- Bio -->
        {% if member.bio %}
          <p class="card-text" style="text-align: justify;">{{ member.bio }}</p>
        {% endif %}

      </div>
    </div>
  </div>
</div>

{% endfor %}

## Contact

<p>
My office is located in Shandong University (Qingdao Campus)<br />
Jimo, Qingdao, Shandong Province, on the 3rd floor of K6-Ganchang Yuan.<br />
For post contact, please address me at:<br />
72 Binhai Road, Jimo, Qingdao, P.R. China<br />
Postal Code: 266237
</p>
