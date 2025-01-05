---
# title: Implementation
layout: page
permalink: /implementation/
order: 7
---
<div class="header-line"></div>
<br>
This is where SNWG solutions move from planning to reality. This critical stage involves coordinated effort between implementation teams, stakeholders, and the Management Office to ensure successful delivery of solutions that meet agency needs.

## Project Lifecycle and Reviews
<div class="header-line"></div>

<!--Timeline-->
<div class="timeline">
    <!-- PreFormulation -->
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>Pre-formulation</h3>
            <p>Initial project planning begins after NASA learns about proposed SNWG activities. Teams start preliminary work while budget and scope adjustments are still possible.</p>
        </div>
    </div >
    <!-- Monthly Update-->
    <div class="timeline-item">
        <div class="review-title">Status Updates</div>
        <div class="review-freq">Monthly</div>
            <p>Track progress, address issues, update stakeholders</p>
    </div> 
    <!-- Formulation -->
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>Formulation</h3>
            <p>Detailed planning phase following ATP approval. Teams finalize project plans, establish agreements, and prepare for implementation.</p>
        </div>
    </div>
    <!-- Implementation -->
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>Implementation</h3>
            <p>Core development phase where planned activities are carried out according to the Project Plan. Regular reviews track progress.</p>
        </div>
    </div> 
    <!-- Quarterly Review -->
    <div class="timeline-item">
        <div class="review-title">Progress Reviews</div>
        <div class="review-freq">Quarterly</div>
            <p>Detailed assessment of milestones and deliverables</p>
    </div> 
    <!-- Operations -->
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>Operations</h3>
            <p>Solution deployment and maintenance phase. May include transition planning or preparation for project closeout.</p>
        </div>
    </div>
    <!-- Annual Review -->
    <div class="timeline-item">
        <div class="review-title">Annual Assessment</div>
        <div class="review-freq">Yearly</div>
        <p>Comprehensive review of project goals and achievements</p>
    </div> 
    <!-- Closeout -->
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <h3>Closeout</h3>
            <p>Final phase marking project completion through achievement of goals, operational end, or transition to another organization.</p>
        </div>
    </div>
    <!-- End All-->
</div>

## Decision Gates
<div class="header-line"></div>

SNWG projects progress through several key decision gates that ensure proper development, documentation, and readiness for each phase.

<div class="decision-gates">
  <div class="gate-card">
    <div class="gate-header">
      <h3>Authority to Proceed (ATP)</h3>
    </div>
    <div class="gate-content">
      <p>Transition from Pre-Formulation to Formulation</p>
      <ul class="checklist">
        <li>Complete preliminary Project Plan</li>
        <li>Define OSS objectives</li>
        <li>Outline stakeholder engagement</li>
        <li>Establish resource requirements</li>
        <li>Present project goals (15-20 min)</li>
      </ul>
    </div>
  </div>

  <div class="gate-card">
    <div class="gate-header">
      <h3>Formulation to Implementation (F2I)</h3>
    </div>
    <div class="gate-content">
      <p>Authorization to begin implementation activities</p>
      <ul class="checklist">
        <li>Finalize Project Plan</li>
        <li>Complete contractual agreement</li>
        <li>Establish project agreements</li>
        <li>Define DAAC interface</li>
        <li>Present implementation strategy</li>
      </ul>
    </div>
  </div>

  <div class="gate-card">
    <div class="gate-header">
      <h3>Operational Readiness Review (ORR)</h3>
    </div>
    <div class="gate-content">
      <p>Confirmation of operational readiness</p>
      <ul class="checklist">
        <li>Complete system testing</li>
        <li>Resolve all anomalies</li>
        <li>Deliver support products</li>
        <li>Complete documentation</li>
        <li>Train operators</li>
      </ul>
    </div>
  </div>

  <div class="gate-card">
    <div class="gate-header">
      <h3>Project Closeout</h3>
    </div>
    <div class="gate-content">
      <p>Final project completion</p>
      <ul class="checklist">
        <li>Complete Project Summary</li>
        <li>Deliver Final Report</li>
        <li>Document lessons learned</li>
        <li>Transfer technology</li>
        <li>Transition or close operations</li>
      </ul>
    </div>
  </div>
</div>

<style>
/* Timeline styles */
.timeline-container {
  margin: 2rem 0;
  padding: 1rem;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background: var(--timeline-line-color, #e5e7eb);
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin: 2rem 0;
  width: 50%;
  padding: 0 2rem;
}

.timeline-item:nth-child(odd) {
  left: 0;
}

.timeline-item:nth-child(even) {
  left: 50%;
}

.timeline-dot {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background: var(--timeline-dot-color, #3498db);
  border-radius: 50%;
  right: -0.75rem;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-item:nth-child(even) .timeline-dot {
  left: -0.75rem;
}

.timeline-content {
  padding: 1.5rem;
  background: var(--timeline-content-bg, #f8fafc);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Decision Gates styles */
.decision-gates {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .decision-gates {
    grid-template-columns: 1fr;
  }
}

.gate-card {
  background: var(--gate-card-bg, white);
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease;
}

.gate-card:hover {
  transform: translateY(-2px);
}

.gate-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--gate-header-color, #2c3e50);
}

.gate-content {
  color: var(--gate-content-color, #64748b);
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.checklist li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.checklist li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--check-color, #3498db);
}

/* Dark mode support */
[data-theme="dark"] {
  --timeline-line-color: #2d3748;
  --timeline-dot-color: #60a5fa;
  --timeline-content-bg: #1a202c;
  --gate-card-bg: #1a202c;
  --gate-header-color: #e2e8f0;
  --gate-content-color: #a0aec0;
  --check-color: #60a5fa;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .timeline::before {
    left: 1rem;
  }
  
  .timeline-item {
    width: 100%;
    left: 0 !important;
    padding-left: 3rem;
  }
  
  .timeline-dot {
    left: 0.25rem !important;
  }
}

/* Common styles */
.section-container {
  margin: 2rem 0;
}

/* Co-Design Process Flow */
.flow-diagram {
  display: flex;
  flex-wrap: nowrap;
  padding: 1rem 0;
  margin: 1rem 0;
  gap: 1rem;
}

.flow-step {
  min-width: 200px;
  padding: 1rem;
  background: var(--flow-bg, #f8fafc);
  border-left: 4px solid var(--flow-accent, #3498db);
  position: relative;
}

.flow-step::after {
  content: '→';
  position: absolute;
  right: -1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--flow-accent, #3498db);
  font-size: 1.5rem;
}

.flow-step:last-child::after {
  display: none;
}

/* Open Source Requirements Tabs */
.requirements-tabs {
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: 0.5rem;
  overflow: hidden;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid var(--border-color, #e5e7eb);
}

.tab-button {
  padding: 1rem;
  border: none;
  background: none;
  cursor: pointer;
  flex: 1;
  font-weight: 500;
}

.tab-button.active {
  background: var(--tab-active-bg, #3498db);
  color: white;
}

.tab-content {
  padding: 1.5rem;
}

/* Documentation Tree */
.doc-tree {
  margin: 1rem 0;
  padding-left: 1rem;
}

.doc-category {
  margin-bottom: 1.5rem;
}

.doc-category h4 {
  color: var(--heading-color, #2c3e50);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.doc-category h4::before {
  content: '📁';
}

.doc-list {
  margin-left: 1.5rem;
  list-style: none;
}

.doc-list li {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.doc-list li::before {
  content: '📄';
  position: absolute;
  left: 0;
}

/* Review Timeline */
.review-timeline {
  position: relative;
  padding-left: 2rem;
  margin: 1rem 0;
}

.review-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--timeline-line, #e5e7eb);
}

.review-item {
  position: relative;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
}

.review-item::before {
  content: '';
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--timeline-dot, #3498db);
  left: -2.5rem;
  top: 0.25rem;
}

.review-title {
  font-weight: 500;
  color: var(--heading-color, #2c3e50);
  margin-bottom: 0.25rem;
}

.review-freq {
  font-size: 0.875rem;
  color: var(--text-muted, #64748b);
}

/* Dark mode support */
[data-theme="dark"] {
  --flow-bg: #1a202c;
  --flow-accent: #60a5fa;
  --border-color: #2d3748;
  --tab-active-bg: #60a5fa;
  --heading-color: #e2e8f0;
  --timeline-line: #2d3748;
  --timeline-dot: #60a5fa;
  --text-muted: #a0aec0;
}
</style>

<div class="documentation-container">
  <h2 class="doc-title">Project Documentation</h2>
  <div class="header-line"></div>
  <br>
  
  <div class="doc-section">
    <div class="doc-category">
      <button class="doc-toggle active" onclick="toggleSection(this)">
        <i class="fas fa-folder"></i>
        <span>Planning Documents</span>
        <i class="fas fa-chevron-down"></i>
      </button>
      <div class="doc-content show">
        <div class="doc-item">
          <i class="fas fa-file-alt"></i>
          <span><a href="https://docs.google.com/document/d/1hfbKXOta7htTs1RDtvpAXxBwu6QxuqnndGXOMkyM-UQ/edit?usp=drive_link">Project Plan Template</a></span>
        </div>
        <div class="doc-item">
          <i class="fas fa-file-alt"></i>
          <span>Stakeholder Engagement Plan</span>
        </div>
        <div class="doc-item">
          <i class="fas fa-file-alt"></i>
          <span>Risk Management Strategy</span>
        </div>
      </div>
    </div>
    <div class="doc-category">
      <button class="doc-toggle active" onclick="toggleSection(this)">
        <i class="fas fa-folder"></i>
        <span>Technical Documents</span>
        <i class="fas fa-chevron-down"></i>
      </button>
      <div class="doc-content show">
        <div class="doc-item">
          <i class="fas fa-file-alt"></i>
          <span>Interface Control Documents</span>
        </div>
        <div class="doc-item">
          <i class="fas fa-file-alt"></i>
          <span>System Architecture</span>
        </div>
        <div class="doc-item">
          <i class="fas fa-file-alt"></i>
          <span>API Documentation</span>
        </div>
      </div>
    </div>
    <div class="doc-category">
      <button class="doc-toggle active" onclick="toggleSection(this)">
        <i class="fas fa-folder"></i>
        <span>Operational Documents</span>
        <i class="fas fa-chevron-down"></i>
      </button>
      <div class="doc-content show">
        <div class="doc-item">
          <i class="fas fa-file-alt"></i>
          <span>Training Materials</span>
        </div>
        <div class="doc-item">
          <i class="fas fa-file-alt"></i>
          <span>Operating Procedures</span>
        </div>
        <div class="doc-item">
          <i class="fas fa-file-alt"></i>
          <span>Support Documentation</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.documentation-container {
  max-width: 800px;
  margin: 2rem auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.doc-title {
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.doc-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.doc-category {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.doc-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #2c3e50;
  transition: background-color 0.2s;
}

.doc-toggle:hover {
  background-color: #f8fafc;
}

.doc-toggle i {
  margin-right: 0.75rem;
  color: #4682B4;
}

.doc-toggle .fa-chevron-down {
  margin-left: auto;
  transition: transform 0.2s;
}

.doc-toggle:not(.active) .fa-chevron-down {
  transform: rotate(-90deg);
}

.doc-content {
  display: none;
  padding: 0.5rem 1rem 1rem;
  background-color: white;
}

.doc-content.show {
  display: block;
}

.doc-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0.25rem 0;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
}

.doc-item:hover {
  background-color: #f8fafc;
}

.doc-item i {
  margin-right: 0.75rem;
  color: #94a3b8;
  font-size: 0.875rem;
}

.doc-item span {
  color: #4b5563;
  font-size: 0.875rem;
}

@media (max-width: 640px) {
  .documentation-container {
    margin: 1rem;
  }
  
  .doc-toggle {
    padding: 0.75rem;
  }
}

.header-line {
    height: 3px;
    background: linear-gradient(to right, #3498db, #2ecc71);
    margin-top: 0.5rem;
    border-radius: 2px;
    width: 100px;
}
</style>

<script>
function toggleSection(button) {
  button.classList.toggle('active');
  const content = button.nextElementSibling;
  content.classList.toggle('show');
}
</script>

