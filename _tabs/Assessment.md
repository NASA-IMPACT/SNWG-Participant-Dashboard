---
title: Assessment
layout: page
order: 3
---

<style>
/* Custom styles to match Overview page design */
.hero-section {
    background: linear-gradient(135deg, #87CEEB, #4682B4);
    color: white;
    padding: 4rem 1rem;
    margin: -2rem -1.5rem 2rem -1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.hero-content {
    max-width: 72rem;
    margin: 0 auto;
}

.nav-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
}

.tab-button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
}

.tab-button.active {
    background-color: #4682B4;
    color: white;
    transition: all 0.3s ease;
}

.tab-button:not(.active) {
    background-color: white;
    color: #2c3e50;
    border: 1px solid #e5e7eb;
}

.tab-button:not(.active):hover {
    background-color: #f3f4f6;
}

.content-section {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 2rem;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.card {
    background-color: #f8fafc;
    padding: 1.5rem;
    border-radius: 0.75rem;
    border: 1px solid #e5e7eb;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    color: #4682B4;
    font-size: 1.125rem;
    cursor: pointer;
    user-select: none;
}

.chevron {
    transition: transform 0.3s ease;
}

.card-header.active .chevron {
    transform: rotate(180deg);
}

.card-content {
    display: none;
    padding: 0 1rem 1rem 1rem;
}

.card-header.active + .card-content {
    display: block;
}

.timeline-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.timeline-month {
    flex-shrink: 0;
    width: 6rem;
    color: #4682B4;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.process-step {
    display: flex;
    align-items: start;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
}

.step-number {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #2563eb;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 0.875rem;
}

/* Hide all sections by default */
.tab-content {
    display: none;
}

/* Show active section */
.tab-content.active {
    display: block;
}

/* Timeline styling */
.timeline-container {
    width: 100%;
    padding: 20px 0;
    position: relative;
    overflow-x: auto;
}

.timeline-wrapper {
    min-width: 100%;
    padding: 10px 0;
    position: relative;
}

.timeline-line {
    position: absolute;
    top: 50%;
    left: 40px;
    right: 40px;
    height: 4px;
    background: #4682B4;
    transform: translateY(-50%);
}

.timeline-phases {
    display: flex;
    justify-content: space-between;
    margin: 0 40px;
    position: relative;
}

.timeline-phase {
    flex: 1;
    margin: 0 10px;
    position: relative;
}

.timeline-marker {
    width: 20px;
    height: 20px;
    background: #4682B4;
    border: 4px solid #fff;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}

.timeline-content {
    background: #f8fafc;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
}

.timeline-content:hover {
    transform: translateY(-5px);
}

.timeline-date {
    color: #4682B4;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 5px;
}

.timeline-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.timeline-details {
    font-size: 0.875rem;
}

.timeline-milestone {
    font-size: 0.75rem;
    color: #4682B4;
    background: #f0f7ff;
    padding: 4px 8px;
    border-radius: 4px;
    margin-top: 8px;
    display: inline-block;
}

@media (max-width: 1024px) {
    .timeline-container {
        padding: 10px;
    }
}

.text-xl {
    margin-top: 0px;
}

.mobile-note {
    display: none;
    padding: 10px;
    background: #f0f7ff;
    border-radius: 4px;
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .mobile-note {
        display: block;
    }
}
</style>

<!-- Timeline Container -->
<div class="content-section">
    <h3 class="text-xl font-semibold mb-4">Key Milestones</h3>
    <div class="mobile-note">
        <i class="fas fa-info-circle mr-2"></i>
        Scroll horizontally to view the complete timeline
    </div>
        <div class="timeline-wrapper">
            <div class="timeline-line"></div>            
            <div class="timeline-phases">
                <!-- Phase 1 -->
                <div class="timeline-phase">
                    <div class="timeline-content">
                        <div class="timeline-date"> Months 1-2</div>
                        <div class="timeline-title"> Survey Review & Team Assembly</div>
                        <div class="timeline-details">
                            <div class="mb-2"><i class="fas fa-tasks mr-2"></i> Review surveys & form teams</div>
                            <div class="mb-2"><i class="fas fa-tools mr-2"></i> Tools: Asana</div>
                        </div>
                        <div class="timeline-milestone">
                            <i class="fas fa-flag mr-1"></i>Teams Formed
                        </div>
                    </div>
                </div>
                <!-- Phase 2 -->
                <div class="timeline-phase">
                    <div class="timeline-content">
                        <div class="timeline-date"> Months 3-5</div>
                        <div class="timeline-title"> Agency Interviews</div>
                        <div class="timeline-details">
                            <div class="mb-2"><i class="fas fa-comments mr-2"></i> Conduct interviews</div>
                            <div class="mb-2"><i class="fas fa-clipboard mr-2"></i> Document findings</div>
                            <div class="mb-2"><i class="fas fa-tools mr-2"></i> Tools: Miro, Google Drive</div>
                        </div>
                        <div class="timeline-milestone">
                            <i class="fas fa-flag mr-1"></i> Interviews Complete
                        </div>
                    </div>
                </div>
                <!-- Phase 3 -->
                <div class="timeline-phase">
                    <div class="timeline-content">
                        <div class="timeline-date"> Months 6-8</div>
                        <div class="timeline-title"> Solution Development</div>
                        <div class="timeline-details">
                            <div class="mb-2"><i class="fas fa-lightbulb mr-2"></i> Submit solutions</div>
                            <div class="mb-2"><i class="fas fa-chart-line mr-2"></i> Estimate satisfaction</div>
                            <div class="mb-2"><i class="fas fa-tools mr-2"></i> Tools: Miro, Google Drive</div>
                        </div>
                        <div class="timeline-milestone">
                            <i class="fas fa-flag mr-1"></i> Solutions Submitted
                        </div>
                    </div>
                </div>
                <!-- Phase 4 -->
                <div class="timeline-phase">
                    <div class="timeline-content">
                        <div class="timeline-date"> Months 9-12</div>
                        <div class="timeline-title"> Report Writing</div>
                        <div class="timeline-details">
                            <div class="mb-2"><i class="fas fa-file-alt mr-2"></i> Draft reports</div>
                            <div class="mb-2"><i class="fas fa-check-double mr-2"></i> Review & finalize</div>
                            <div class="mb-2"><i class="fas fa-tools mr-2"></i> Tools: Asana, RGT</div>
                        </div>
                        <div class="timeline-milestone">
                            <i class="fas fa-flag mr-1"></i> Reports Finalized
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div class="mt-8 text-sm text-gray-600">
        <br><i class="fas fa-info-circle mr-2"></i>
        Each phase includes support from the SNWG Management Office, including tools, templates, and guidance.
    </div>
</div>

<!-- Assessment Tabs -->
<div class="nav-tabs">
    <button class="tab-button active" onclick="showTab('overview')">Overview</button>
    <button class="tab-button" onclick="showTab('roles')">Roles</button>
    <button class="tab-button" onclick="showTab('tools')">Tools</button>
    <button class="tab-button" onclick="showTab('processes')">Processes</button>
</div>

<!-- Overview Section -->
<div id="overview" class="tab-content active">
    <div class="content-section">
        <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">Timeline & Structure</h3>
            <div class="grid-container">
                <div class="card">
                    <div class="card-header">
                        <i class="far fa-calendar"></i>
                        <h4 class="font-medium">Duration</h4>
                    </div>
                    <p>12-month comprehensive assessment cycle</p>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="fas fa-arrow-right"></i>
                        <h4 class="font-medium">Key Phases</h4>
                    </div>
                    <ul class="list-disc list-inside">
                        <li>Survey Review</li>
                        <li>Team Assembly</li>
                        <li>Agency Interviews</li>
                        <li>Solution Development</li>
                        <li>Report Writing</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Roles Section -->
<div id="roles" class="tab-content">
    <div class="content-section">
        <h3 class="text-xl font-semibold mb-4">Participant Roles</h3>
       <div class="grid-container">
            <div class="card">
                <div class="card-header">
                    <i class="fas fa-user"></i>
                    <h3>Assessment Lead</h3>
                </div>
                <ul class="space-y-2">
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Responsible for leading team coordination
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Oversees interview preparation and execution
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Manages solution development process
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Ensures report completion and quality
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Primary point of contact for the Need ID
                </ul>
            </div>
            <div class="card">
                <div class="card-header">
                    <i class="fas fa-users"></i>
                    <h3>Team Member</h3>
                </div>
                <ul class="space-y-2">
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Participates in agency interviews
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Reviews survey responses and documentation
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Contributes to solution development
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Assists with report writing
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Provides technical expertise in specialty area
                </ul>
            </div>
            <div class="card">
                <div class="card-header">
                    <i class="fas fa-star"></i>
                    <h3>Subject Matter Expert</h3>
                </div>
                <ul class="space-y-2">
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Provides specialized technical expertise
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Reviews and validates proposed solutions
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Assists with technical documentation
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Supports solution feasibility assessment
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Contributes to satisfaction level estimates
                </ul>
            </div>
            <div class="card">
                <div class="card-header">
                    <i class="fas fa-building"></i>
                    <h3>Agency Representative</h3>
                </div>
                <ul class="space-y-2">
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Represents agency interests and needs
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Provides agency context and requirements
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Facilitates agency communication
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Reviews and validates recommendations
                    <br><i class="fas fa-check text-blue-600 mr-2"></i>  Supports solution implementation planning
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- Tools Section -->
<div id="tools" class="tab-content">
    <div class="content-section">
        <h3 class="text-xl font-semibold mb-4">Assessment Tools</h3>
          <div class="space-y-8">
            <div class="card">
                <div class="card-header" onclick="toggleCard(this)">
                    <i class="fas fa-tasks"></i>
                    <h3>Asana</h3>
                    <i class="fas fa-chevron-down chevron ml-auto"></i>
                </div>
                <div class="card-content">
                <p class="mb-4">Project management platform for tracking needs, solutions, and milestones throughout the assessment process.</p>
                <div class="grid-container">
                    <div class="card">
                        <h4 class="font-medium mb-2">Key Features</h4>
                        <ul class="space-y-2">
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Need ID tracking and organization
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Solution submission and tagging
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Progress monitoring through milestones
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Team collaboration tools
                        </ul>
                    </div>
                    <div class="card">
                        <h4 class="font-medium mb-2">Quick Tips</h4>
                        <ul class="space-y-2">
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Use search to quickly find your Need IDs
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Complete milestones in sequential order
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Set your role in your profile settings
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Contact SNWG MO for account issues
                        </ul>
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="font-medium mb-2">Common Solutions</h4>
                    <ul class="space-y-2">
                        <br><i class="fas fa-exclamation-circle text-blue-600 mr-2"></i>  <strong>See "Trial Version"?</strong> Contact SNWG MO for the correct account setup
                        <br><i class="fas fa-exclamation-circle text-blue-600 mr-2"></i>  <strong>Wrong workspace?</strong> Click your profile icon to switch to nasa.gov
                        <br><i class="fas fa-exclamation-circle text-blue-600 mr-2"></i>  <strong>Need help with LOS?</strong> Request a quick demo from SNWG MO
                    </ul>
                </div>
            </div>      
            </div>      
            <div class="card">
                <div class="card-header" onclick="toggleCard(this)">
                    <i class="fas fa-file-alt"></i>
                    <h3>Report Generation Tool (RGT)</h3>
                    <i class="fas fa-chevron-down chevron ml-auto"></i>
                </div>
                <div class="card-content">
                <p class="mb-4">Collaborative platform for writing and managing standardized assessment reports.</p>
                <div class="grid-container">
                    <div class="card">
                        <h4 class="font-medium mb-2">Key Features</h4>
                        <ul class="space-y-2">
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Standardized report templates
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Collaborative writing environment
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Mission/product selection tools
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Automatic boilerplate integration
                        </ul>
                    </div>
                    <div class="card">
                        <h4 class="font-medium mb-2">Best Practices</h4>
                        <ul class="space-y-2">
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Save work frequently while editing
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Use comments for team communication
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Review example reports provided
                            <br><i class="fas fa-check text-blue-600 mr-2"></i>  Contact SNWG MO for login issues
                        </ul>
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="font-medium mb-2">Report Writing Tips</h4>
                    <ul class="space-y-2">
                        <br><i class="fas fa-lightbulb text-blue-600 mr-2"></i>  Focus on comprehensive needs assessment, not just solution listings
                        <br><i class="fas fa-lightbulb text-blue-600 mr-2"></i>  Use free text fields for information not available in dropdowns
                        <br><i class="fas fa-lightbulb text-blue-600 mr-2"></i>  Review your report in "View" mode before submitting
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<div id="processes" class="tab-content">
    <div class="content-section">
        <h3 class="text-xl font-semibold mb-4">Key Processes</h3>
        <div class="space-y-8">
            <!-- Card 1 -->
            <div class="card">
                <div class="card-header" onclick="toggleCard(this)">
                    <i class="fas fa-comments"></i>
                    <h3>Agency Interviews</h3>
                    <i class="fas fa-chevron-down chevron ml-auto"></i>
                </div>
                <div class="card-content">
                    <p class="mb-4">Structured discussions with agency stakeholders to understand their needs in detail. Interviews are scheduled by the SNWG MO team and include features to support your success:</p>
                    <div class="grid-container">
                        <div class="card">
                            <h4 class="font-medium mb-2">Before the Interview</h4>
                            <ul class="space-y-2">
                                <br><i class="fas fa-check text-blue-600 mr-2"></i>  Optional pre-interview huddle with your team
                                <br><i class="fas fa-check text-blue-600 mr-2"></i>  Interview preparation guide and blueprint
                                <br><i class="fas fa-check text-blue-600 mr-2"></i>  Welcome packet for all participants
                                <br><i class="fas fa-check text-blue-600 mr-2"></i>  Previous cycle information (if applicable)
                            </ul>
                        </div>
                        <div class="card">
                            <h4 class="font-medium mb-2">During the Interview</h4>
                            <ul class="space-y-2">
                                <br><i class="fas fa-check text-blue-600 mr-2"></i>  SNWG MO note-taker present
                                <br><i class="fas fa-check text-blue-600 mr-2"></i>  Interview recording available
                                <br><i class="fas fa-check text-blue-600 mr-2"></i>  SNWG agency representative participation
                                <br><i class="fas fa-check text-blue-600 mr-2"></i>  CSDA expert for commercial data needs
                            </ul>
                        </div>
                    </div>
                    <div class="space-y-3 mt-6">
                        <h4 class="font-medium mb-2">Best Practices for Assessment Leads</h4>
                        <div class="process-step">
                            <div class="step-number">1</div>
                            <div>
                                <h4 class="font-medium">Review Survey & Materials</h4>
                                <p class="text-gray-600">Study the survey response and any previous cycle information. Consider both stated and underlying needs.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <div class="step-number">2</div>
                            <div>
                                <h4 class="font-medium">Prepare Your Team</h4>
                                <p class="text-gray-600">Schedule a pre-interview huddle to discuss strategy and assign roles. Share prepared questions with your team.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <div class="step-number">3</div>
                            <div>
                                <h4 class="font-medium">Lead the Discussion</h4>
                                <p class="text-gray-600">Focus on understanding needs rather than immediately proposing solutions. Encourage all team members to participate.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <div class="step-number">4</div>
                            <div>
                                <h4 class="font-medium">Follow Up</h4>
                                <p class="text-gray-600">Review interview notes and recordings. Document key findings in Asana. Continue agency communication as needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Card 2 -->
            <div class="card">
                <div class="card-header" onclick="toggleCard(this)">
                    <i class="fas fa-lightbulb"></i>
                    <h3>Solution Development</h3>
                    <i class="fas fa-chevron-down chevron ml-auto"></i>   
                </div>
                <div class="card-content">
                <p class="mb-4">Process for identifying, developing, and prioritizing solutions to meet agency needs.</p>
                <div class="space-y-3">
                    <div class="process-step">
                        <div class="step-number">1</div>
                        <div>
                            <h4 class="font-medium"> Solution Identification</h4>
                            <p class="text-gray-600"> Research and propose potential solutions</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">2</div>
                        <div>
                            <h4 class="font-medium"> Solution Submission</h4>
                            <p class="text-gray-600"> Submit solutions through the provided form</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">3</div>
                        <div>
                            <h4 class="font-medium"> Need ID Tagging</h4>
                            <p class="text-gray-600"> Connect solutions to relevant needs</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">4</div>
                        <div>
                            <h4 class="font-medium">Satisfaction Estimation</h4>
                            <p class="text-gray-600">Estimate Level of Satisfaction for each solution</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card 3 -->
        <div class="card">
            <div class="card-header" onclick="toggleCard(this)">
                <i class="fas fa-file-alt"></i>
                <h3>Report Writing</h3>
                <i class="fas fa-chevron-down chevron ml-auto"></i>   
            </div>
            <div class="card-content">
                <p class="mb-4">Collaborative process for documenting findings and recommendations.</p>
                <div class="space-y-3">
                    <div class="process-step">
                        <div class="step-number">1</div>
                        <div>
                            <h4 class="font-medium">Information Gathering</h4>
                            <p class="text-gray-600">Collect all relevant documentation and findings</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">2</div>
                        <div>
                            <h4 class="font-medium">Draft Development</h4>
                            <p class="text-gray-600">Write initial report content in RGT</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">3</div>
                        <div>
                            <h4 class="font-medium">Team Review</h4>
                            <p class="text-gray-600">Collaborative review and revision process</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="step-number">4</div>
                        <div>
                            <h4 class="font-medium">Finalization</h4>
                            <p class="text-gray-600">Complete final edits and submit for approval</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
function toggleCard(header) {
    header.classList.toggle('active');
}

function showTab(tabName) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}
</script>