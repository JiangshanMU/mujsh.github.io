---
title: "Jiangshan Mu, Ph.D. | Homepage"
layout: default
excerpt: "Atmospheric chemistry, air pollution, environmental health, and exposure inequality."
sitemap: false
permalink: /
---

<style>
.home-hero {
  position: relative;
  overflow: hidden;
  padding: 36px 34px;
  margin: 4px 0 28px 0;
  border-radius: 18px;
  border: 1px solid #d8e4ee;
  background: linear-gradient(135deg, #f7fbff 0%, #edf5fb 45%, #f8fbff 100%);
  box-shadow: 0 10px 26px rgba(30, 70, 100, 0.06);
}
.home-hero h1 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 2.25rem;
  letter-spacing: -0.02em;
}
.home-hero .home-position {
  font-size: 1.05rem;
  color: #2f4b63;
  margin-bottom: 18px;
}
.home-hero .home-summary {
  max-width: 860px;
  margin-bottom: 0;
  color: #33495c;
  font-size: 1.02rem;
  line-height: 1.72;
}
.home-tagline {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}
.home-tagline span {
  padding: 6px 11px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #d6e4ef;
  color: #31516b;
  font-size: 0.88rem;
}
.home-section h2 {
  margin-top: 30px;
  padding-bottom: 6px;
  border-bottom: 1px solid #e4edf3;
  color: #20394d;
}
.home-section h2 .symbol {
  display: inline-block;
  margin-right: 6px;
}
.research-block {
  padding: 14px 16px;
  margin: 12px 0;
  border-left: 4px solid #8fb4d1;
  background: #fbfdff;
  border-radius: 8px;
}
.research-block strong {
  color: #243f55;
}
#newsid {
  box-shadow: 0 8px 18px rgba(30, 70, 100, 0.06);
}
@media (max-width: 768px) {
  .home-hero { padding: 28px 22px; }
  .home-hero h1 { font-size: 1.9rem; }
}
</style>

<section class="home-hero">
  <h1>Jiangshan Mu</h1>
  <p class="home-position"><strong>Postdoctoral Researcher</strong><br>Nicholas School of the Environment, Duke University</p>
  <p class="home-summary">I study atmospheric composition and its implications for air quality, environmental health, and population exposure. My work integrates ground-based observations, satellite-derived products, atmospheric models, and machine learning to quantify long-term changes in air pollution and their unequal impacts across regions and populations.</p>
  <div class="home-tagline">
    <span>Atmospheric Chemistry</span>
    <span>Air Pollution</span>
    <span>Machine Learning</span>
    <span>Environmental Health</span>
    <span>Exposure Inequality</span>
  </div>
</section>

<div id="newsid" class="float-md-end col-sm-4 bg-light border" style="display:block; padding: 18px; margin-left: 24px; margin-bottom: 18px; border-radius: 10px;">
<div class="well">
<h4>📰 Latest News</h4>
<p>More updates are available on the <a href="{{ site.url }}{{ site.baseurl }}/allnews.html">news page</a>.</p>
<hr style="margin-top: 18px; margin-bottom: 8px;" />
{% for article in site.data.news limit:6 %}
<p><em>{{ article.headline }}</em><br><span>{{ article.date }}</span></p>
{% unless forloop.last %}
<hr style="margin-top: 5px; margin-bottom: 8px;" />
{% endunless %}
{% endfor %}
</div>
</div>

<section class="home-section">

## <span class="symbol">🔬</span>Research Profile

I am currently a postdoctoral researcher in [Prof. Drew Shindell](https://nicholas.duke.edu/people/faculty/shindell)'s group at the [Nicholas School of the Environment](https://nicholas.duke.edu), **Duke University**. I received my Ph.D. in Environmental Science from the [Environment Research Institute](https://www.hj.sdu.edu.cn/), **Shandong University**, in **June 2025**, where I was co-advised by [Prof. Likun Xue](https://faculty.sdu.edu.cn/xuelikun/zh_CN/index.htm) and [Prof. Yuqiang Zhang](https://faculty.sdu.edu.cn/~f2eaAz/zh_CN/index.htm). From January to May 2024, I conducted collaborative research as a visiting scholar at the **Universidad Politecnica de Madrid**.

My research focuses on the processes, patterns, and consequences of atmospheric pollution. A central theme of my work is to develop and apply high-resolution atmospheric datasets to examine how air pollution evolves over time, how exposure varies among populations, and how emission changes affect air quality and climate-relevant atmospheric composition.

## <span class="symbol">🧭</span>Research Interests

<div class="research-block">
<strong>Atmospheric composition and air pollution</strong><br>
Quantifying the spatial and temporal variability of key atmospheric pollutants, with emphasis on nitrogen oxides, ozone, particulate matter, and related chemical processes.
</div>

<div class="research-block">
<strong>Data-driven atmospheric reconstruction</strong><br>
Developing machine-learning approaches that combine satellite observations, ground measurements, meteorology, emissions, and chemical transport model outputs to reconstruct high-resolution pollutant fields.
</div>

<div class="research-block">
<strong>Exposure, inequality, and environmental health</strong><br>
Assessing long-term population exposure to air pollution and identifying disparities across regions, countries, and demographic groups.
</div>

<div class="research-block">
<strong>Air quality and climate interactions</strong><br>
Investigating how emission changes influence atmospheric composition, radiative forcing, and the coupled air-quality and climate consequences of human activities.
</div>

## <span class="symbol">🌍</span>Selected Research Themes

- Long-term reconstruction of global air pollutant concentrations using machine learning and multi-source atmospheric data.
- Population exposure assessment and inequality analysis based on high-resolution atmospheric datasets.
- Attribution of air-quality changes to anthropogenic emissions, meteorology, and chemical processes.
- Evaluation of model simulations using ground-based, aircraft, satellite, and reanalysis datasets.

## <span class="symbol">✉️</span>Contact

I welcome research discussions and collaborations related to atmospheric chemistry, air pollution exposure, environmental health, and data-driven atmospheric science.

**Email:** [mujiangshan0615@gmail.com](mailto:mujiangshan0615@gmail.com)

</section>

<!-- Original homepage backup: _backup/home_2026-05-28_before-homepage-beautification.md -->
