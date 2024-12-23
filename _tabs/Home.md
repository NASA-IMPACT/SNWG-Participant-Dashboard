---
layout: post
title: SNWG Management Office Guide
toc: true
---

<div class="guide-container">
  <h1 class="text-center">SNWG Management Office Guide</h1>
  <p class="text-center subtitle">Your resource for navigating the SNWG project lifecycle</p>

  <div class="tabs">
    <input type="radio" id="tab1" name="tab-control" checked>
    <input type="radio" id="tab2" name="tab-control">
    <input type="radio" id="tab3" name="tab-control">
    <input type="radio" id="tab4" name="tab-control">
    
    <ul>
      <li><label for="tab1">Overview</label></li>
      <li><label for="tab2">Implementation</label></li>
      <li><label for="tab3">Stakeholder Engagement</label></li>
      <li><label for="tab4">Resources</label></li>
    </ul>
    
    <div class="content">
      <section>
        <!-- Overview Tab Content -->
        <div class="lifecycle-image">
          ![dark mode only](assets/DarkModeSNWGCycleGraphic.png){: .dark .w-75 .shadow .rounded-10 w='1212' h='668' }
          ![light mode only](assets/LightModeSNWGCycleGraphic.png){: .light .w-75 .shadow .rounded-10 w='1212' h='668' }
          <p class="image-caption">The SNWG Project lifecycle.</p>
        </div>

        <div class="card">
          <h2>What is SNWG?</h2>
          <p>The Satellite Needs Working Group (SNWG) conducts a survey of U.S. federal agencies every two years to identify what Earth observation data they need to fulfill their mission. The SNWG is part of the U.S. Group on Earth Observations (USGEO) and includes members from various federal agencies that use Earth observation data.</p>
          
          <p>Survey responses are assessed by NASA, NOAA, and USGS to identify agency needs, potential data gaps in the current NASA program of record, and relevant datasets. Solutions that meet these identified needs are formulated, and those that are estimated to significantly increase satisfaction of multiple U.S. agencies are selected by the Executive Branch for funding and implementation.</p>
        </div>

        <div class="solution-grid">
          <div class="solution-column">
            <h3>Cycle 1 (2016)</h3>
            <ul>
              <li>ADMG - <em>CASEI</em></li>
              <li>Data Curation for Discovery</li>
              <li>Harmonized Landsat-Sentinel-2</li>
              <li>Commercial Smallsat Data Acquisition</li>
            </ul>
          </div>
          
          <div class="solution-column">
            <h3>Cycle 2 (2018)</h3>
            <ul>
              <li>Low Latency Freeboard & Ice Thickness Products</li>
              <li>Internet of Animals</li>
              <li>Global Surface Water Extent (DSWx)</li>
              <li>Water Quality Products</li>
            </ul>
          </div>
          
          <div class="solution-column">
            <h3>Cycle 3 (2020)</h3>
            <ul>
              <li>Air Quality Products</li>
              <li>Planetary Boundary Layer</li>
              <li>HLS-Vegetation Indices</li>
              <li>TEMPO NRT</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Implementation Content</h2>
        <!-- Implementation tab content -->
      </section>

      <section>
        <h2>Stakeholder Engagement Content</h2>
        <!-- Stakeholder engagement tab content -->
      </section>

      <section>
        <h2>Resources Content</h2>
        <!-- Resources tab content -->
      </section>
    </div>
  </div>
</div>

<style>
.guide-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.text-center {
  text-align: center;
}

.subtitle {
  margin-bottom: 2rem;
  color: var(--text-muted);
}

.tabs {
  margin: 2rem 0;
  background: var(--card-bg);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.tabs input[type="radio"] {
  display: none;
}

.tabs ul {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
}

.tabs ul li {
  flex: 1;
  text-align: center;
}

.tabs ul li label {
  display: block;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tabs ul li label:hover {
  color: var(--link-color);
}

.lifecycle-image {
  text-align: center;
  margin: 2rem 0;
}

.image-caption {
  text-align: center;
  color: var(--text-muted);
  font-style: italic;
  margin-top: 0.5rem;
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.solution-column {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.solution-column h3 {
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border-color);
}

.solution-column ul {
  list-style: none;
  padding-left: 0;
}

.solution-column li {
  margin: 0.8rem 0;
  padding-left: 1.2rem;
  position: relative;
}

.solution-column li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--link-color);
}

.tabs .content section {
  display: none;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

#tab1:checked ~ .content section:nth-of-type(1),
#tab2:checked ~ .content section:nth-of-type(2),
#tab3:checked ~ .content section:nth-of-type(3),
#tab4:checked ~ .content section:nth-of-type(4) {
  display: block;
}

#tab1:checked ~ ul li:nth-of-type(1) label,
#tab2:checked ~ ul li:nth-of-type(2) label,
#tab3:checked ~ ul li:nth-of-type(3) label,
#tab4:checked ~ ul li:nth-of-type(4) label {
  color: var(--link-color);
  border-bottom: 2px solid var(--link-color);
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.card h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--heading-color);
}

.card p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>