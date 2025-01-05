---
title: Training Paths
layout: page
order: 8
---

<div class="header-line"></div>

<div class="intro-section">
    <div class="intro-content">
        <p class="lead-text">Welcome to the SNWG Stakeholder Training Program. We've designed specialized learning paths to support each type of stakeholder in their unique role within the SNWG ecosystem.</p>    
</div>

<div class="training-paths">
    <!-- Survey Submitters-->
    <div class="training-path">
        <div class="path-header">
        <div class="path-icon">📋</div>
            <h3>Survey Submitter Training Path</h3>
        </div>
        <div class="timeline">
            <div class="milestone">1</div>
            <div class="milestone">2</div>
            <div class="milestone">3</div>
            <div class="milestone">4</div>
        </div>
        <div class="path-content">
            <div class="module">
                <div class="module-title">Orientation</div>
                <ul>
                    <li>SNWG Overview</li>
                    <li>Survey Process</li>
                    <li>Timeline Understanding</li>
                </ul>
            </div>
            <div class="module">
                <div class="module-title">Technical Requirements</div>
                <ul>
                    <li>Data Specifications</li>
                    <li>System Requirements</li>
                    <li>Documentation Standards</li>
                </ul>
            </div>
            <div class="module">
                <div class="module-title">Communication Skills</div>
                <ul>
                    <li>Interview Preparation</li>
                    <li>Needs Articulation</li>
                    <li>Feedback Provision</li>
                </ul>
            </div>
            <div class="module">
                <div class="module-title">Advanced Topics</div>
                <ul>
                    <li>Solution Co-Design</li>
                    <li>Impact Assessment</li>
                    <li>Long-term Engagement</li>
                </ul>
            </div>
        </div>
    </div>
    <!--End Users-->
    <div class="training-path">
        <div class="path-header">
            <div class="path-icon">👥</div>
            <h3>End User Training Path</h3>
        </div>
        <div class="timeline">
            <div class="milestone">1</div>
            <div class="milestone">2</div>
            <div class="milestone">3</div>
        </div>
        <div class="path-content">
            <div class="module">
                <div class="module-title">Solution Discovery</div>
                <ul>
                    <li>Available Solutions</li>
                    <li>Access Procedures</li>
                    <li>Basic Usage</li>
                </ul>
            </div>
            <div class="module">
                <div class="module-title">Implementation</div>
                <ul>
                    <li>Integration Planning</li>
                    <li>Technical Setup</li>
                    <li>Best Practices</li>
                </ul>
            </div>
            <div class="module">
                <div class="module-title">Advanced Usage</div>
                <ul>
                    <li>Custom Applications</li>
                    <li>Optimization</li>
                    <li>Troubleshooting</li>
                </ul>
            </div>
        </div>
    </div>
    <!--Partner Agencies-->
    <div class="training-path">
        <div class="path-header">
            <div class="path-icon">🤝</div>
            <h3>Partner Agency Training Path</h3>
        </div>
        <div class="timeline">
            <div class="milestone">1</div>
            <div class="milestone">2</div>
            <div class="milestone">3</div>
            <div class="milestone">4</div>
        </div>
        <div class="path-content">
            <div class="module">
                <div class="module-title">Partnership Basics</div>
                <ul>
                    <li>Collaboration Framework</li>
                    <li>Resource Planning</li>
                    <li>Communication Protocols</li>
                </ul>
            </div>
            <div class="module">
                <div class="module-title">Project Management</div>
                <ul>
                    <li>Timeline Planning</li>
                    <li>Resource Allocation</li>
                    <li>Risk Management</li>
                </ul>
            </div>
            <div class="module">
                <div class="module-title">Technical Integration</div>
                <ul>
                    <li>Systems Integration</li>
                    <li>Data Standards</li>
                    <li>Quality Assurance</li>
                </ul>
            </div>
            <div class="module">
                <div class="module-title">Long-term Success</div>
                <ul>
                    <li>Sustainability Planning</li>
                    <li>Impact Measurement</li>
                    <li>Growth Strategies</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style>
.intro-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
}

.header-line {
    height: 3px;
    background: linear-gradient(to right, #3498db, #2ecc71);
    margin: 1rem 0 2rem 0;
    width: 100px;
    border-radius: 2px;
}

.lead-text {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.path-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0;
}

.path-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    transition: transform 0.2s ease;
}

.path-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.path-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.path-card h4 {
    color: #2c3e50;
    margin: 0.5rem 0;
}

.path-card p {
    color: #64748b;
    margin-bottom: 1rem;
}

.duration {
    display: inline-block;
    background: #f1f5f9;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: 0.875rem;
    color: #64748b;
}

.key-info {
    background: #f8fafc;
    border-left: 4px solid #3498db;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 0 4px 4px 0;
}

.key-info p {
    margin: 0;
}

@media (max-width: 768px) {
    .intro-section {
        padding: 1rem;
    }
    
    .path-grid {
        grid-template-columns: 1fr;
    }
}

.training-path {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    background: white;
}

.path-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.path-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.module {
    background: #f8fafc;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
}

.module-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.timeline {
    display: flex;
    margin: 2rem 0;
    position: relative;
    justify-content: space-between;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #e5e7eb;
    z-index: 1;
}

.milestone {
    position: relative;
    z-index: 2;
    background: white;
    padding: 1rem;
    border: 2px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
}
</style>
