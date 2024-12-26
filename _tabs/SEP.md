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
      <p>Welcome to the SNWG Management Office Guide. This tab provides an overview of the Satellite Needs Working Group (SNWG) project lifecycle and essential resources.</p>
    </div>

    <!-- Implementation Tab -->
    <div class="tab">
      <h2>Implementation</h2>
      <p>Explore the structured lifecycle of SNWG project implementation, including key decision gates and deliverables.</p>
      <ul>
        <li>Pre-formulation: Initial planning, team formation, and preliminary documentation.</li>
        <li>Formulation: Project plan development, requirements definition, and resource planning.</li>
        <li>Implementation: Solution development, technical reviews, and validation.</li>
        <li>Operations: Solution deployment, user training, and ongoing maintenance.</li>
      </ul>
    </div>

    <!-- Stakeholder Engagement Tab -->
    <div class="tab">
      <h2>Stakeholder Engagement</h2>
      <p>This tab covers the co-design processes, training, and support mechanisms to ensure effective collaboration between stakeholders and project teams.</p>
    </div>

    <!-- Resources Tab -->
    <div class="tab">
      <h2>Resources</h2>
      <ul>
        <li>Templates: Project Plan Template, OSDMP Template, SEP Template.</li>
        <li>Guides: Co-Design Guide, Implementation Guide, Best Practices.</li>
        <li>Tools: Assessment Tools, Review Checklists, Training Materials.</li>
      </ul>
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
