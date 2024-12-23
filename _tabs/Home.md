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
        <div class="card">
          <h2>What is SNWG?</h2>
          <ul>
            <li>Assessment of federal agency needs</li>
            <li>Implementation of solutions</li>
            <li>Stakeholder engagement & training</li>
          </ul>
        </div>

        <div class="card">
          <h2>Key Phases</h2>
          <ul>
            <li>Pre-formulation</li>
            <li>Formulation</li>
            <li>Implementation</li>
            <li>Operations</li>
            <li>Closeout</li>
          </ul>
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

.tabs .content {
  margin-top: 1.5rem;
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
  margin-bottom: 1rem;
}

.card h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--heading-color);
}

.card ul {
  list-style-type: none;
  padding-left: 0;
}

.card ul li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.card ul li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--link-color);
}
</style>