---
layout: page
title: "Research Group"
permalink: /group/
---

<style>
.group-hero {
  padding: 1.5rem 0 1.2rem 0;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 1.5rem;
}
.group-hero h2 {
  margin-bottom: 0.6rem;
}
.group-hero p {
  max-width: 900px;
  line-height: 1.65;
}
.group-section {
  margin-top: 2rem;
}
.group-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
.member-card {
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 1rem;
  background: #fff;
}
.member-photo {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
  background: #f2f2f2;
  margin-bottom: 0.75rem;
}
.member-name {
  font-weight: 600;
  margin-bottom: 0.2rem;
}
.member-role {
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}
.member-card ul {
  padding-left: 1.2rem;
  margin-bottom: 0.6rem;
}
.research-list li {
  margin-bottom: 0.4rem;
}
.note-box {
  background: #f7f9fb;
  border-left: 4px solid #1d5699;
  padding: 0.9rem 1rem;
  margin-top: 1rem;
}
</style>

<div class="group-hero">
  <h2>Atmospheric Chemistry and Air Pollution Research Group</h2>
  <p>
    Our group studies atmospheric chemistry, air pollution, climate interactions, and environmental inequality by integrating observations, satellite retrievals, chemical transport models, health-impact assessment, and data-driven methods.
  </p>
</div>

## Research Directions

<ul class="research-list">
  <li><strong>Air pollution exposure and inequality:</strong> long-term NO₂ and PM₂.₅ exposure, population-weighted concentration, and health burden assessment.</li>
  <li><strong>Atmospheric chemistry and ozone formation:</strong> precursor emissions, VOC–NOₓ sensitivity, radical chemistry, and emission-control implications.</li>
  <li><strong>Nitrogen deposition and ecosystem impacts:</strong> spatial patterns, source contributions, and meteorological drivers of oxidized and reduced nitrogen deposition.</li>
  <li><strong>Machine learning for environmental analysis:</strong> high-resolution dataset construction, trend attribution, and interpretable modeling frameworks.</li>
</ul>

<div class="note-box">
  This page is a draft structure. Edit <code>_data/group_members.yml</code> to update group members without changing this page layout.
</div>

## Principal Investigator

<div class="group-grid">
  <div class="member-card">
    {% if site.data.group_members.pi.photo and site.data.group_members.pi.photo != "" %}
      <img class="member-photo" src="{{ site.data.group_members.pi.photo | relative_url }}" alt="{{ site.data.group_members.pi.name }}">
    {% endif %}
    <div class="member-name">{{ site.data.group_members.pi.name }}</div>
    <div class="member-role">{{ site.data.group_members.pi.role }}</div>
    <p>{{ site.data.group_members.pi.bio }}</p>
    {% if site.data.group_members.pi.email and site.data.group_members.pi.email != "" %}
      <p>Email: <a href="mailto:{{ site.data.group_members.pi.email }}">{{ site.data.group_members.pi.email }}</a></p>
    {% endif %}
    {% if site.data.group_members.pi.interests %}
      <ul>
        {% for item in site.data.group_members.pi.interests %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>
    {% endif %}
  </div>
</div>

## Current Members

<div class="group-grid">
  {% for member in site.data.group_members.current %}
  <div class="member-card">
    {% if member.photo and member.photo != "" %}
      <img class="member-photo" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
    {% endif %}
    <div class="member-name">{{ member.name }}</div>
    <div class="member-role">{{ member.role }}</div>
    {% if member.bio and member.bio != "" %}<p>{{ member.bio }}</p>{% endif %}
    {% if member.email and member.email != "" %}<p>Email: <a href="mailto:{{ member.email }}">{{ member.email }}</a></p>{% endif %}
    {% if member.interests %}
      <ul>
        {% for item in member.interests %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>
    {% endif %}
  </div>
  {% endfor %}
</div>

## Alumni

<div class="group-grid">
  {% for member in site.data.group_members.alumni %}
  <div class="member-card">
    {% if member.photo and member.photo != "" %}
      <img class="member-photo" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
    {% endif %}
    <div class="member-name">{{ member.name }}</div>
    <div class="member-role">{{ member.role }}</div>
    {% if member.current and member.current != "" %}<p>{{ member.current }}</p>{% endif %}
  </div>
  {% endfor %}
</div>

## Openings

Students and collaborators interested in atmospheric chemistry, air pollution exposure, nitrogen deposition, ozone formation, health impacts, satellite remote sensing, chemical transport modeling, or machine learning for environmental applications are welcome to contact the group.
