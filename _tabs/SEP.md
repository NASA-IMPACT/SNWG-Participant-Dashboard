---
# YAML front matter for Jekyll
layout: post
# The title of the post
# Example: "SNWG Management Office Guide"
title: SNWG Management Office Guide
date: 2024-12-23 12:00:00 +0600
categories: ["Guide"]
# Add any relevant tags or post markers here.
tags: ["overview"]
---
<div class="tabs-wrapper">
  <input type="radio" name="tabs" id="tab1" checked="checked">
  <input type="radio" name="tabs" id="tab2">
  <input type="radio" name="tabs" id="tab3">
  <input type="radio" name="tabs" id="tab4">
 
  <div class="tabs-nav">
    <label for="tab1">Overview</label>
    <label for="tab2">Implementation</label>
    <label for="tab3">Stakeholder Engagement</label>
    <label for="tab4">Resources</label>
  </div>

  <div class="tabs-content">
    <!-- Overview Tab -->
    <div class="tab">
      <h2>Overview</h2>
      <div class="grid-wrapper">
        {% include grid-card.html title="Cycle 1 (2016)" items="ADMG - <em>CASEI</em>, Data Curation for Discovery, Harmonized Landsat-Sentinel-2, Commercial Smallsat Data Acquisition" %}
        {% include grid-card.html title="Cycle 2 (2018)" items="Low Latency Freeboard & Ice Thickness, Internet of Animals, Global Surface Water Extent (DSWx), Water Quality Products" %}
        {% include grid-card.html title="Cycle 3 (2020)" items="Air Quality Products, Planetary Boundary Layer, HLS-Vegetation Indices, TEMPO NRT" %}
        {% include grid-card.html title="Cycle 4 (2022)" items="Forest Structure from GEDI & NISAR, Coastal Ocean Color Products, Surface Deformation Analytics" %}
        {% include grid-card.html title="Cycle 5 (2024)" items="Survey Phase Complete, Assessment in Progress, Solutions Under Development" %}
      </div>
    </div>

    <!-- Implementation Tab -->

    <div class="tab">
      <h2>Implementation</h2>
      <p>The SNWG project implementation follows a structured lifecycle with key decision gates and deliverables:</p>
      <div class="grid-wrapper">
        <div class="grid-card">
          <h3>Pre-formulation</h3>
          <ul>
            <li>Initial planning</li>
            <li>Team formation</li>
            <li>Preliminary documentation</li>
          </ul>
        </div>

        <div class="grid-card">
          <h3>Formulation</h3>
          <ul>
            <li>Project Plan development</li>
            <li>Requirements definition</li>
            <li>Resource planning</li>
          </ul>
        </div>

        <div class="grid-card">
          <h3>Implementation</h3>
          <ul>
            <li>Solution development</li>
            <li>Technical reviews</li>
            <li>Testing & validation</li>
          </ul>
        </div>

        <div class="grid-card">
          <h3>Operations</h3>
          <ul>
            <li>Solution deployment</li>
            <li>User training</li>
            <li>Maintenance & support</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Stakeholder Engagement Tab -->

    <div class="tab">
      <h2>Stakeholder Engagement</h2>
      <p>The SNWG SEP facilitates collaboration between implementation teams and stakeholders throughout the project lifecycle.</p>
      <div class="grid-wrapper">
        <div class="grid-card">
          <h3>Co-Design Process</h3>
          <ul>
            <li>Requirements gathering</li>
            <li>Design validation</li>
            <li>User feedback integration</li>
          </ul>
        </div>

        <div class="grid-card">
          <h3>Training & Support</h3>
          <ul>
            <li>User workshops</li>
            <li>Documentation</li>
            <li>Technical assistance</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Resources Tab -->
    
    <div class="tab">
      <h2>Resources</h2>
      <div class="grid-wrapper">
        <div class="grid-card">
          <h3>Templates</h3>
          <ul>
            <li>Project Plan Template</li>
            <li>OSDMP Template</li>
            <li>SEP Template</li>
          </ul>
        </div>

        <div class="grid-card">
          <h3>Guides</h3>
          <ul>
            <li>Co-Design Guide</li>
            <li>Implementation Guide</li>
            <li>Best Practices</li>
          </ul>
        </div>

        <div class="grid-card">
          <h3>Tools</h3>
          <ul>
            <li>Assessment Tools</li>
            <li>Review Checklists</li>
            <li>Training Materials</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.tabs-wrapper {
  margin: 2rem 0;
}

.tabs-wrapper input[type="radio"] {
  display: none;
}

.tabs-nav {
  display: flex;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 2rem;
}

.tabs-nav label {
  flex: 1;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  color: var(--text-color);
  font-weight: 500;
  transition: all 0.3s ease;
}

.tabs-nav label:hover {
  color: var(--link-color);
}

.tabs-content .tab {
  display: none;
}

#tab1:checked ~ .tabs-content .tab:nth-child(1),
#tab2:checked ~ .tabs-content .tab:nth-child(2),
#tab3:checked ~ .tabs-content .tab:nth-child(3),
#tab4:checked ~ .tabs-content .tab:nth-child(4) {
  display: block;
}

#tab1:checked ~ .tabs-nav label:nth-of-type(1),
#tab2:checked ~ .tabs-nav label:nth-of-type(2),
#tab3:checked ~ .tabs-nav label:nth-of-type(3),
#tab4:checked ~ .tabs-nav label:nth-of-type(4) {
  color: var(--link-color);
  border-bottom: 2px solid var(--link-color);
  margin-bottom: -2px;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2rem 0;
}

.grid-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.grid-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

h3 {
  margin: 0 0 1rem 0;
  color: var(--heading-color);
  font-size: 1.25rem;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
}

li {
  margin: 0.75rem 0;
  padding-left: 0.5rem;
  line-height: 1.4;
}

.lead-text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--text-muted);
  text-align: center;
}

@media (max-width: 768px) {
  .grid-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
