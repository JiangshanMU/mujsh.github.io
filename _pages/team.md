---
title: "About me"
layout: default
excerpt: "About Mu Jiangshan"
sitemap: false
permalink: /team/
---

# About me

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

<div class="row" style="margin-bottom: 30px;">
  <div class="col-sm-3">
    <img src="{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive img-thumbnail" alt="{{ member.name }}" style="width: 100%;" />
  </div>

  <div class="col-sm-9">
    <h4>{{ member.name }}</h4>
    <h5 class="text-muted">{{ member.title }}</h5>
    
    {% if member.email %}
    <p><strong>Email:</strong> <a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
    {% endif %}

    {% if member.links %}
    <p><strong>Links:</strong><br/>
      {% for link in member.links %}
        {{ link }}<br/>
      {% endfor %}
    </p>
    {% endif %}

    {% if member.bio %}
    <p>{{ member.bio }}</p>
    {% endif %}

    {% if member.education %}
    <p><strong>Education:</strong></p>
    <ul>
      {% for edu in member.education %}
      <li>{{ edu }}</li>
      {% endfor %}
    </ul>
    {% endif %}
  </div>
</div>

{% endfor %}


# Contact

<iframe
  src="https://map.baidu.com/search/%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6(%E9%9D%92%E5%B2%9B%E6%A0%A1%E5%8C%BA)/@13434831.265,4326352.12,16z?querytype=s&da_src=shareurl&wd=%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6(%E9%9D%92%E5%B2%9B%E6%A0%A1%E5%8C%BA)&c=236&src=0&wd2=%E9%9D%92%E5%B2%9B%E5%B8%82%E5%8D%B3%E5%A2%A8%E5%8C%BA&pn=0&sug=1&l=12&b=(13341933.54,4254437.34;13461741.54,4315941.34)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&sug_forward=533a74c36e163bc3b23c81fc&device_ratio=1"
  width="400"
  height="300"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

<p>My office is located in Shandong University (Qingdao Campus)<br/>
Jimo, Qingdao, Shandong Province, on the 3rd floor of K6-Ganchang Yuan.<br/>
For post contact, please address me at:<br/>
72 Binhai Road, Jimo, Qingdao, Shandong, P.R. China<br/>
Postal Code: 266237</p>
