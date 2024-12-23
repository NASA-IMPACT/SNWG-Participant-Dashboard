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

      ## Previous Solutions

      <div class="solutions-grid">
        <div class="solution-card">
          <h3>Cycle 1 (2016)</h3>
          <ul>
            <li>ADMG - <em>CASEI</em></li>
            <li>Data Curation for Discovery</li>
            <li>Harmonized Landsat-Sentinel-2</li>
            <li>Commercial Smallsat Data Acquisition</li>
          </ul>
        </div>

        <div class="solution-card">
          <h3>Cycle 2 (2018)</h3>
          <ul>
            <li>Low Latency Freeboard & Ice Thickness Products</li>
            <li>Internet of Animals</li>
            <li>Global Surface Water Extent (DSWx)</li>
            <li>Water Quality Products</li>
          </ul>
        </div>

        <div class="solution-card">
          <h3>Cycle 3 (2020)</h3>
          <ul>
            <li>Air Quality Products</li>
            <li>Planetary Boundary Layer</li>
            <li>HLS-Vegetation Indices</li>
            <li>TEMPO NRT</li>
          </ul>
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

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.solution-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.solution-card h3 {
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border-color);
}

.solution-card ul {
  list-style: none;
  padding-left: 0;
}

.solution-card li {
  margin: 0.8rem 0;
  padding-left: 1.2rem;
  position: relative;
}

.solution-card li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--link-color);
}

.lead-text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--text-muted);
}
</style>