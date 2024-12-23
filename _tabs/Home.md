---
title: SNWG Management Office Guide
layout: post
date: 2024-12-23 12:00:00 +0600
categories: [Guide]
tags: [overview]
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
      <p class="text-center lead-text">Your resource for navigating the SNWG project lifecycle</p>

      ![dark mode only](assets/DarkModeSNWGCycleGraphic.png){: .dark .w-75 .shadow .rounded-10 w='1212' h='668' }
      ![light mode only](assets/LightModeSNWGCycleGraphic.png){: .light .w-75 .shadow .rounded-10 w='1212' h='668' }
      _The SNWG Project lifecycle._

      ## What is SNWG?

      The Satellite Needs Working Group (SNWG) conducts a survey of U.S. federal agencies every two years to identify what Earth observation data they need to fulfill their mission. The SNWG is part of the U.S. Group on Earth Observations (USGEO) and includes members from various federal agencies that use Earth observation data.

      Survey responses are assessed by NASA, NOAA, and USGS to identify agency needs, potential data gaps in the current NASA program of record, and relevant datasets. Solutions that meet these identified needs are formulated, and those that are estimated to significantly increase satisfaction of multiple U.S. agencies are selected by the Executive Branch for funding and implementation.

      ## Previous Solutions {: .no-margin }

      <div class="solutions-wrapper">
        <div class="solution-card">
          <div class="card-header">
            <h3>Cycle 1 (2016)</h3>
          </div>
          <div class="card-content">
            <ul>
              <li><a href="#" class="solution-link">ADMG - <em>CASEI</em></a></li>
              <li><a href="#" class="solution-link">Data Curation for Discovery</a></li>
              <li><a href="#" class="solution-link">Harmonized Landsat-Sentinel-2</a></li>
              <li><a href="#" class="solution-link">Commercial Smallsat Data Acquisition</a></li>
            </ul>
          </div>
        </div>

        <div class="solution-card">
          <div class="card-header">
            <h3>Cycle 2 (2018)</h3>
          </div>
          <div class="card-content">
            <ul>
              <li><a href="#" class="solution-link">Low Latency Freeboard & Ice Thickness Products</a></li>
              <li><a href="#" class="solution-link">Internet of Animals</a></li>
              <li><a href="#" class="solution-link">Global Surface Water Extent (DSWx)</a></li>
              <li><a href="#" class="solution-link">Water Quality Products</a></li>
            </ul>
          </div>
        </div>

        <div class="solution-card">
          <div class="card-header">
            <h3>Cycle 3 (2020)</h3>
          </div>
          <div class="card-content">
            <ul>
              <li><a href="#" class="solution-link">Air Quality Products</a></li>
              <li><a href="#" class="solution-link">Planetary Boundary Layer</a></li>
              <li><a href="#" class="solution-link">HLS-Vegetation Indices</a></li>
              <li><a href="#" class="solution-link">TEMPO NRT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Implementation Tab -->
    <div class="tab">
      <h2>Implementation</h2>
      <!-- Implementation content here -->
    </div>

    <!-- Stakeholder Engagement Tab -->
    <div class="tab">
      <h2>Stakeholder Engagement</h2>
      <!-- Engagement content here -->
    </div>

    <!-- Resources Tab -->
    <div class="tab">
      <h2>Resources</h2>
      <!-- Resources content here -->
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

/* Show content for selected tab */
#tab1:checked ~ .tabs-content div:nth-of-type(1),
#tab2:checked ~ .tabs-content div:nth-of-type(2),
#tab3:checked ~ .tabs-content div:nth-of-type(3),
#tab4:checked ~ .tabs-content div:nth-of-type(4) {
  display: block;
}

/* Style active tab label */
#tab1:checked ~ .tabs-nav label:nth-of-type(1),
#tab2:checked ~ .tabs-nav label:nth-of-type(2),
#tab3:checked ~ .tabs-nav label:nth-of-type(3),
#tab4:checked ~ .tabs-nav label:nth-of-type(4) {
  color: var(--link-color);
  border-bottom: 2px solid var(--link-color);
  margin-bottom: -2px;
}

.no-margin {
  margin-bottom: 1rem !important;
}

.solutions-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0 3rem 0;
}

.solution-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.solution-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
  background: var(--card-header-bg, var(--card-bg));
  border-bottom: 2px solid var(--border-color);
  padding: 1rem 1.5rem;
}

.card-header h3 {
  margin: 0;
  color: var(--heading-color);
  font-size: 1.25rem;
}

.card-content {
  padding: 1.5rem;
}

.card-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-content li {
  margin: 0.8rem 0;
  padding-left: 1.2rem;
  position: relative;
}

.card-content li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--link-color);
}

.solution-link {
  color: var(--link-color);
  text-decoration: none;
  transition: color 0.2s ease;
}

.solution-link:hover {
  color: var(--link-hover-color, var(--link-color));
  text-decoration: underline;
}

.lead-text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--text-muted);
}

/* Dark mode specific styles */
[data-theme="dark"] .solution-card {
  background: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .card-header {
  background: var(--card-header-bg, var(--card-bg));
}
</style>