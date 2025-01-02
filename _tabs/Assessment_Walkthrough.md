---
title: Your SNWG Assessment Journey
author: SNWG MO
date: 2024-12-30 12:00:00 +0600
categories: [Guide]
tags: [overview, getting-started]
order: 4
---

<!-- Custom styles - add to assets/css/style.scss -->
<style>
:root {
    --primary: #3b82f6;
    --primary-light: rgba(59, 130, 246, 0.1);
    --success: #10b981;
    --warning: #f59e0b;
}

.hero-section {
    background: linear-gradient(135deg, var(--primary), #60a5fa);
    color: white;
    padding: 3rem 2rem;
    border-radius: 1rem;
    margin: -1rem -1.5rem 2rem -1.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
    opacity: 0.2;
}

.hero-section h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: white;
}

.timeline {
    position: relative;
    margin: 3rem 0;
    padding: 2rem 0;
}

.timeline-line {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--primary-light);
    transform: translateY(-50%);
}

.phase-wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
}

.phase {
    text-align: center;
    flex: 1;
    padding: 0 15px;
    position: relative;
}

.phase-marker {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--sidebar-bg);
    border: 3px solid var(--border-color);
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: relative;
    transition: all 0.3s ease;
}

.phase.current .phase-marker {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
    box-shadow: 0 0 0 6px var(--primary-light);
    animation: pulse 2s infinite;
}

.phase.completed .phase-marker {
    background: var(--success);
    color: white;
    border-color: var(--success);
}

.phase-content {
    opacity: 0.7;
    transition: all 0.3s ease;
}

.phase.current .phase-content {
    opacity: 1;
}

.phase:hover .phase-content {
    opacity: 1;
    transform: translateY(-5px);
}

.action-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.action-card {
    background: var(--card-bg);
    border-radius: 1rem;
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.action-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
}

.action-card:hover::before {
    transform: scaleX(1);
}

.action-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.resource-card {
    background: var(--card-bg);
    border-radius: 1rem;
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.resource-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--primary);
}

.timeline-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin: 2rem 0;
}

.timeline-table th,
.timeline-table td {
    padding: 1rem;
    background: var(--card-bg);
    border: none;
}

.timeline-table tr {
    transition: all 0.3s ease;
}

.timeline-table tr:hover {
    transform: translateX(5px);
}

.timeline-table td:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
}

.timeline-table td:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
}

.status-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
}

.status-badge.in-progress {
    background: var(--primary-light);
    color: var(--primary);
}

.status-badge.upcoming {
    background: rgba(249, 115, 22, 0.1);
    color: #f97316;
}

.help-container {
    background: var(--card-bg);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    margin: 3rem 0;
    border: 1px solid var(--border-color);
    position: relative;
}

.help-icon {
    width: 60px;
    height: 60px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: -50px auto 1rem auto;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    }
}

@media (max-width: 768px) {
    .hero-section {
        padding: 2rem 1rem;
        margin: -1rem -1rem 2rem -1rem;
    }

    .hero-section h1 {
        font-size: 1.75rem;
    }

    .phase-wrapper {
        flex-direction: column;
    }

    .timeline-line {
        width: 4px;
        height: 100%;
        left: 23px;
        top: 0;
        transform: none;
    }

    .phase {
        display: flex;
        align-items: center;
        text-align: left;
        padding: 1rem 0 1rem 60px;
    }

    .phase-marker {
        position: absolute;
        left: 0;
        margin: 0;
    }

    .phase-content {
        margin-left: 1rem;
    }
}
</style>

<div class="hero-section">
    <h1>Welcome to Your SNWG Assessment Journey!</h1>
    <p>Your guide to navigating the assessment process successfully</p>
</div>

## Your Assessment Progress
<div class="header-line"></div>

Track your journey through each phase of the assessment process:

<div class="timeline">
    <div class="timeline-line"></div>
    <div class="phase-wrapper">
        <div class="phase completed">
            <div class="phase-marker">✓</div>
            <div class="phase-content">
                <h3>Getting Started</h3>
                <p>Complete onboarding</p>
            </div>
        </div>
        <div class="phase current">
            <div class="phase-marker">2</div>
            <div class="phase-content">
                <h3>Survey Review</h3>
                <p>Analyze agency needs</p>
            </div>
        </div>
        <div class="phase">
            <div class="phase-marker">3</div>
            <div class="phase-content">
                <h3>Agency Interviews</h3>
                <p>Gather insights</p>
            </div>
        </div>
        <div class="phase">
            <div class="phase-marker">4</div>
            <div class="phase-content">
                <h3>Solution Development</h3>
                <p>Propose recommendations</p>
            </div>
        </div>
    </div>
</div>

## You Are Here: Survey Review Phase

<div class="action-grid">
    <div class="action-card">
        <h3>📋 Take Action Now</h3>
        <ul>
            <li>Read assigned survey responses</li>
            <li>Review previous cycle information</li>
            <li>Identify key questions for agency</li>
            <li>Schedule pre-interview huddle</li>
            <li>Complete training modules</li>
        </ul>
    </div>
    
    <div class="action-card">
        <h3>📅 Coming Up Next</h3>
        <ul>
            <li>Agency interviews (2-3 weeks)</li>
            <li>Document initial findings</li>
            <li>Begin solution brainstorming</li>
            <li>Team collaboration sessions</li>
        </ul>
    </div>
</div>

## Key Resources
<div class="header-line"></div>

<div class="resource-grid">
    <div class="resource-card">
        <div class="resource-icon">📚</div>
        <h4>Survey Analysis Guide</h4>
        <p>Best practices for reviewing and analyzing agency survey responses</p>
        <a href="#" class="btn btn-primary btn-sm">View Guide</a>
    </div>    
    <div class="resource-card">
        <div class="resource-icon">👥</div>
        <h4>Interview Preparation</h4>
        <p>Tips and templates for effective agency interviews</p>
        <a href="#" class="btn btn-primary btn-sm">View Guide</a>
    </div>
    <div class="resource-card">
        <div class="resource-icon">📊</div>
        <h4>Previous Cycle Examples</h4>
        <p>Learn from past successful assessments</p>
        <a href="#" class="btn btn-primary btn-sm">View Examples</a>
    </div>
</div>

## Timeline & Key Dates

<table class="timeline-table">
    <tr>
        <td>Survey Review Completion</td>
        <td>Jan 15, 2025</td>
        <td><span class="status-badge in-progress">In Progress</span></td>
    </tr>
    <tr>
        <td>Agency Interviews Begin</td>
        <td>Feb 1, 2025</td>
        <td><span class="status-badge upcoming">Upcoming</span></td>
    </tr>
    <tr>
        <td>Initial Findings Due</td>
        <td>Feb 28, 2025</td>
        <td><span class="status-badge upcoming">Upcoming</span></td>
    </tr>
    <tr>
        <td>Solution Development</td>
        <td>Mar 15, 2025</td>
        <td><span class="status-badge upcoming">Upcoming</span></td>
    </tr>
</table>

## Tips for Success

1. Start reviewing surveys early to identify patterns and key themes
2. Document questions and insights in Asana as you review
3. Connect with your thematic area lead for guidance
4. Attend all scheduled training sessions
5. Reach out to SNWG MO if you need support

Information Handling Guidelines
<div class="action-grid">
    <div class="action-card">
        <h3>✅ Acceptable to Share</h3>
        <ul>
            <li>General assessment process details</li>
            <li>Your role and participation</li>
            <li>Non-sensitive training materials</li>
            <li>Public SNWG documentation</li>
            <li>Published reports and findings</li>
        </ul>
    </div>
    <div class="action-card">
    <h3>🚫 Do Not Share</h3>
    <ul>
        <li>Agency-specific survey responses</li>
        <li>Interview notes and recordings</li>
        <li>Draft solutions or recommendations</li>
        <li>Internal discussions and deliberations</li>
        <li>Participant contact information</li>
    </ul>
</div>
</div>
Always consult the SNWG MO if you're unsure about sharing specific information.

## Assessment Training Videos
<div class="header-line"></div>


<div class="tabs">
  <!-- Tab inputs -->
  <input type="radio" id="video-tab1" name="video-tabs" class="tab-inputs" checked>
  <input type="radio" id="video-tab2" name="video-tabs" class="tab-inputs">
  <input type="radio" id="video-tab3" name="video-tabs" class="tab-inputs">
  <input type="radio" id="video-tab4" name="video-tabs" class="tab-inputs">
  
  <!-- Tab labels -->
  <div class="tab-labels">
    <label for="video-tab1" class="tab-label">Introduction</label>
    <label for="video-tab2" class="tab-label">Interviews & Brainstorming</label>
    <label for="video-tab3" class="tab-label">Evaluating Information</label>
    <label for="video-tab4" class="tab-label">Using Asana</label>
  </div>
  <!-- Tab panels -->
    <div class="tab-panels">
        <!-- Introduction Tab -->
        <div id="video-panel1" class="tab-panel">
            <div class="video-grid">
                <div class="video-item">
                    <div class="video-container">
                        <iframe src="https://drive.google.com/file/d/1H0eDflwpXpdu0yMGKX8MyBy-0Jxv6T-O/preview" allowfullscreen></iframe>
                    </div>
                    <div class="video-info">
                        <h3>Welcome 2024</h3>
                        <p>Welcome from SNWG Project Scientist Pontus Olofsson</p>
                    </div>
                </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1BsxVb85yWCLmg-vwOdX7e1_S0iWtSWF1/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>CSDA and SNWG</h3>
                            <p>Melissa Martin, CSDA Program Manager, ESD</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1zrzk7-fRhxLbANGlorS3ed5TPRiwGsSu/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Assessment Overview</h3>
                            <p>Overview of the assessment process</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1-MyJrz7byTQbKYBgN9_b1zhJM-EZ7Is5/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Process Overview</h3>
                            <p>More expanded overview of the assessment process with Anita, with lessons learned and look ahead</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1Xg0xVjrn5KQ-K9FgITkoUlznQVoHtDwP/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Introduction: SNWG Solutions</h3>
                            <p>Previous Solutions and how they fit in</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1QUIAXpDpJZdYx74gUMd-k_c0THg5Hogn/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Introduction: Estimating Level of Satisfaction</h3>
                            <p>How do we know it's a Solution we want to pursue?</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Interviews Tab -->
            <div id="video-panel2" class="tab-panel">
                <div class="video-grid">
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1C6-Xj1a9s2RkHs7ZEaMtU2jbxQD38Y64/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Conducting a Brainstorming Session</h3>
                            <p>Getting ready for stakeholder interviews</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1C6-Xj1a9s2RkHs7ZEaMtU2jbxQD38Y64/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Conducting Sessions</h3>
                            <p>Interview and brainstorming techniques</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1C6-Xj1a9s2RkHs7ZEaMtU2jbxQD38Y64/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Follow-up Steps</h3>
                            <p>Post-interview procedures</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Evaluation Tab -->
            <div id="video-panel3" class="tab-panel">
                <div class="video-grid">
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1C6-Xj1a9s2RkHs7ZEaMtU2jbxQD38Y64/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Evaluating Potential Solutions</h3>
                            <p>Gathering assessment information</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1C6-Xj1a9s2RkHs7ZEaMtU2jbxQD38Y64/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Placeholder</h3>
                            <p>Evaluating collected data</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1C6-Xj1a9s2RkHs7ZEaMtU2jbxQD38Y64/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Placeholder</h3>
                            <p>Synthesizing findings</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Asana Tab -->
            <div id="video-panel4" class="tab-panel">
                <div class="video-grid">
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1lNWgZdIDkcYXuWoDEGN8wMn-OT8yC2xJ/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Setting up your Asana account</h3>
                            <p>Join our team!</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/10OyCRjFOkGs7AipazZMh2ceek_emEMcm/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Setting up your Asana environment</h3>
                            <p>Nifty!</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1lNWgZdIDkcYXuWoDEGN8wMn-OT8yC2xJ/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Searching the Solution Board</h3>
                            <p>Find a card to update or comment on.</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/10OyCRjFOkGs7AipazZMh2ceek_emEMcm/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Using the Google Form to Create a Need Card</h3>
                            <p>Nifty!</p>
                        </div>
                    </div>
                    <div class="video-item">
                        <div class="video-container">
                            <iframe src="https://drive.google.com/file/d/1eLpybRN7Tccf8a291xlwsNcjtKx9PHM8/preview" allowfullscreen></iframe>
                        </div>
                        <div class="video-info">
                            <h3>Editing Your submission</h3>
                            <p>Hold up, I forgot something!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script>
(function() {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        var tabButtons = document.querySelectorAll('.tab-button');
        var tabPanes = document.querySelectorAll('.tab-pane');

        function setActiveTab(targetId) {
            // Remove active class from all tabs and panes
            tabButtons.forEach(function(btn) {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            tabPanes.forEach(function(pane) {
                pane.classList.remove('active');
            });

            // Add active class to target tab and pane
            var targetButton = document.querySelector('[data-tab="' + targetId + '"]');
            var targetPane = document.getElementById(targetId);

            if (targetButton && targetPane) {
                targetButton.classList.add('active');
                targetButton.setAttribute('aria-selected', 'true');
                targetPane.classList.add('active');
            }
        }

        // Add click handlers
        tabButtons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                var targetId = this.getAttribute('data-tab');
                setActiveTab(targetId);
            });
        });

        // Initialize first tab
        setActiveTab('introduction');
    });
})();
</script>

<style>
.video-section {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

/* Update tab styles to match Open Source Requirements */
.tabs {
    width: 100%;
    margin: 2rem 0;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    overflow: hidden;
}

.tab-inputs {
    display: none;
}

.tab-labels {
    display: flex;
    border-bottom: 1px solid #e5e7eb;
}

.tab-label {
    flex: 1;
    padding: 1rem;
    background: white;
    color: #374151;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.tab-panels {
    background: white;
    padding: 1.5rem;
}

.tab-panel {
    display: none;
}

.tabs-container {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative
}

.tab-controls {
    display: flex;
    background: #f8fafc;
    border-bottom: 2px solid #e2e8f0;
    padding: 1rem 1rem 0;
    position: relative;
    z-index: 2;
}

.tab-button {
    padding: 0.75rem 1.5rem;
    border: none;
    background: none;
    color: #64748b;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    position: relative;
    z-index: 3;
}

.tab-button:hover {
    color: #3b82f6;
}

.tab-button.active {
    color: #3b82f6;
}

.tab-button.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #3b82f6;
}

.tab-content {
    padding: 2rem;
    z-index: 1;
}

.tab-pane {
    display: none !important; /* Use !important to override any Jekyll styles */
}

.tab-pane.active {
    display: block !important; /* Use !important to override any Jekyll styles */
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 0.5rem;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

.video-info {
    padding: 1.5rem 0;
}

.video-info h3 {
    margin: 0 0 0.5rem 0;
    color: #2c3e50;
    font-size: 1.25rem;
}

.video-info p {
    margin: 0;
    color: #64748b;
}

.placeholder {
    background: #f8fafc;
    border: 2px dashed #e2e8f0;
}

.placeholder-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #64748b;
}

.material-icons {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
    .video-section {
        padding: 1rem;
    }
    
    .tab-controls {
        flex-direction: column;
        padding: 0.5rem;
    }
    
    .tab-button {
        width: 100%;
        text-align: center;
    }
}

/*colorful line below heading*/
.header-line {
    height: 3px;
    background: linear-gradient(to right, #3498db, #2ecc71);
    margin-top: 0.5rem;
    border-radius: 2px;
    width: 100px;
}

/* Active states for video tabs */
#video-tab1:checked ~ .tab-labels .tab-label[for="video-tab1"],
#video-tab2:checked ~ .tab-labels .tab-label[for="video-tab2"],
#video-tab3:checked ~ .tab-labels .tab-label[for="video-tab3"],
#video-tab4:checked ~ .tab-labels .tab-label[for="video-tab4"] {
    background: #4682B4;
    color: white;
}

#video-tab1:checked ~ .tab-panels #video-panel1,
#video-tab2:checked ~ .tab-panels #video-panel2,
#video-tab3:checked ~ .tab-panels #video-panel3,
#video-tab4:checked ~ .tab-panels #video-panel4 {
    display: block;
}
</style>

## FAQ
<div class="header-line"></div>

<div class="faq-section">
    <details>
        <summary>How much time should I expect to commit?</summary>
        <p>Plan for 2-4 hours monthly for regular activities, with additional time during key development phases.</p>
    </details>
    <details>
        <summary>This is exciting! What can I talk about to co-workers and friends?</summary>
        <p>Keep it secret. Keep it safe.</p>
    </details>
    <details>
        <summary>How can I ensure my agency's needs are met?</summary>
        <p>Active participation in early requirement gathering and regular feedback sessions is key.</p>
    </details>
</div>


<div class="help-container">
    <div class="help-icon">💡</div>
    <h3>Need Help?</h3>
    <div class="header-line" style="margin: 0 auto;"></div>
    <p>The SNWG Management Office is here to support you throughout the assessment process.</p>
    <p>Contact us at: <a href="mailto:info@snwg-impact.net">info@snwg-impact.net</a></p>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects and animation triggers
    const cards = document.querySelectorAll('.action-card, .resource-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
</script>