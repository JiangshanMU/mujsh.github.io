---
title: "About me"
layout: default
excerpt: "Mu Jiangshan - About me"
sitemap: false
permalink: /team/
---

# About me

<style>
/* 居中整个内容 */
.row {
  max-width: 900px;
  margin: 2rem auto;
}

/* 卡片整体排版优化 */
.card.mb-3.border-0 {
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1.5rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.05);
  border-radius: 8px;
}

/* 头像样式 */
.card .img-fluid {
  max-width: 200px;
  height: auto;
  border-radius: 8px;
}

/* 姓名和职称样式 */
.card-title {
  margin-bottom: 0.25rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.card-subtitle {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: #555;
}

/* 邮箱链接样式 */
.card-text a {
  color: #0645AD;
  text-decoration: none;
}
.card-text a:hover {
  text-decoration: underline;
}

/* Bio文字排版优化 */
.card + p small {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  display: block;
  margin: 1rem auto 0 auto;
  max-width: 900px;
  text-align: justify;
}

/* 教育经历样式 */
.card + p + ul {
  margin: 0.5rem auto 1rem auto;
  max-width: 900px;
  font-size: 1rem;
  color: #444;
  padding-left: 1.5rem;
}
</style>

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

<!-- Only one column layout for about me -->
<div class="row">
  <div class="col-sm-12 clearfix">
    <div class="card mb-3 border-0">
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
          <p class="card-text">email: <a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
          {% endif %}
          {% if member.links %}
          <p class="card-text" style="width: 100%"><small>{% for link in member.links %}{{ link }}{% unless forloop.last %} | {% endunless %}{% endfor %}</small></p>
          {% endif %}
        </div>
      </div>
    </div>

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

{% endfor %}



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
