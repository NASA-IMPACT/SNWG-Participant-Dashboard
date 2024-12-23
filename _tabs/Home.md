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

<style>
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

/* Dark mode specific styles */
[data-theme="dark"] .solution-card {
  background: var(--card-bg);
  border-color: var(--border-color);
}

[data-theme="dark"] .card-header {
  background: var(--card-header-bg, var(--card-bg));
}
</style>