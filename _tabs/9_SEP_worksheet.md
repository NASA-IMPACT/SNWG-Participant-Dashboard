---
title: Stakeholder Worksheet
layout: page
permalink: /sep/worksheet
order: 9
---

<div class="header-line"></div>

<div class="worksheet-container">
    <!-- Progress Tracker -->
    <div class="progress-section">
        <div class="progress-tracker">
            <div class="progress-step completed">
                <div class="step-number">1</div>
                <div class="step-label">Survey Review</div>
            </div>
            <div class="progress-line"></div>
            <div class="progress-step current">
                <div class="step-number">2</div>
                <div class="step-label">Interview Prep</div>
            </div>
            <div class="progress-line"></div>
            <div class="progress-step">
                <div class="step-number">3</div>
                <div class="step-label">Documentation</div>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">
        <div class="action-card">
            <div class="action-icon">📋</div>
            <h3>Review Checklist</h3>
            <div class="checklist">
                <label class="checkbox-item">
                    <input type="checkbox"> Review survey responses
                </label>
                <label class="checkbox-item">
                    <input type="checkbox"> Check past assessments
                </label>
                <label class="checkbox-item">
                    <input type="checkbox"> Research solutions
                </label>
            </div>
        </div>
        <div class="action-card">
            <div class="action-icon">🎯</div>
            <h3>Key Goals</h3>
            <div class="goals-list">
                <div class="goal-item">Understand agency needs</div>
                <div class="goal-item">Identify potential solutions</div>
                <div class="goal-item">Document findings</div>
            </div>
        </div>
    </div>

    <!-- Survey Analysis -->
    <div class="analysis-section collapsible">
        <div class="section-header" onclick="toggleSection(this)">
            <h2>Survey Analysis</h2>
            <span class="toggle-icon">▼</span>
        </div>
        <div class="section-content">
            <div class="analysis-grid">
                <div class="analysis-card">
                    <h3>Need ID Notes</h3>
                    <textarea placeholder="Record key points from survey responses..." class="analysis-input"></textarea>
                </div>
                <div class="analysis-card">
                    <h3>Questions to Ask</h3>
                    <div class="question-list">
                        <input type="text" placeholder="Add a question..." class="question-input">
                        <button onclick="addQuestion()" class="add-button">+</button>
                    </div>
                    <div id="questions-container"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Solution Ideas -->
    <div class="solutions-section collapsible">
        <div class="section-header" onclick="toggleSection(this)">
            <h2>Solution Development</h2>
            <span class="toggle-icon">▼</span>
        </div>
        <div class="section-content">
            <div class="solution-card">
                <div class="card-header">
                    <input type="text" placeholder="Solution Title" class="solution-title">
                </div>
                <div class="card-body">
                    <div class="input-group">
                        <label>Benefits</label>
                        <textarea placeholder="List key benefits..."></textarea>
                    </div>
                    <div class="input-group">
                        <label>Challenges</label>
                        <textarea placeholder="Potential challenges..."></textarea>
                    </div>
                    <div class="input-group">
                        <label>Resources Needed</label>
                        <textarea placeholder="Required resources..."></textarea>
                    </div>
                </div>
            </div>
            <button class="add-solution-btn">+ Add Another Solution</button>
        </div>
    </div>

    <!-- Notes & Next Steps -->
    <div class="notes-section collapsible">
        <div class="section-header" onclick="toggleSection(this)">
            <h2>Notes & Action Items</h2>
            <span class="toggle-icon">▼</span>
        </div>
        <div class="section-content">
            <div class="notes-grid">
                <div class="notes-card">
                    <h3>Key Findings</h3>
                    <textarea placeholder="Record important discoveries and insights..." class="findings-input"></textarea>
                </div>
                <div class="notes-card">
                    <h3>Action Items</h3>
                    <div class="action-list">
                        <div class="action-item">
                            <input type="text" placeholder="Action item...">
                            <input type="date" class="date-input">
                        </div>
                        <button class="add-action-btn">+ Add Action</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Print/Save Controls -->
    <div class="save-controls">
        <button onclick="prepareForPrint()" class="save-btn">
            <span class="btn-icon">💾</span> Save/Print Worksheet
        </button>
    </div>
</div>

<!-- Print-only content container -->
<div id="print-content" style="display: none;"></div>

<style>
.save-controls {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 100;
}

.save-btn {
    background: #3b82f6;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.save-btn:hover {
    background: #2563eb;
    transform: translateY(-2px);
}

.btn-icon {
    font-size: 1.25rem;
}

@media print {
    .save-controls {
        display: none;
    }
    
    .worksheet-container {
        padding: 0;
    }

    .collapsible .section-content {
        display: block !important;
    }

    .toggle-icon {
        display: none;
    }

    textarea, input[type="text"] {
        border: none;
        padding: 0;
    }

    input[type="checkbox"] {
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
}
.worksheet-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.progress-section {
    margin-bottom: 3rem;
}

.progress-tracker {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1;
}

.step-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f1f5f9;
    border: 2px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
}

.progress-step.completed .step-number {
    background: #4ade80;
    border-color: #4ade80;
    color: white;
}

.progress-step.current .step-number {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
    animation: pulse 2s infinite;
}

.progress-line {
    flex: 1;
    height: 2px;
    background: #e2e8f0;
    margin: 0 1rem;
}

.quick-actions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.action-card {
    background: white;
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.action-card:hover {
    transform: translateY(-2px);
}

.action-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.checkbox-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
}

.goals-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.goal-item {
    background: #f8fafc;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
}

.collapsible {
    background: white;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.section-header {
    padding: 1.5rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8fafc;
}

.section-content {
    padding: 1.5rem;
    display: none;
}

.section-content.active {
    display: block;
}

.analysis-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.analysis-card {
    background: #f8fafc;
    padding: 1.5rem;
    border-radius: 0.5rem;
}

textarea, input[type="text"] {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    margin: 0.5rem 0;
    font-family: inherit;
}

.question-list {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.add-button {
    padding: 0.5rem 1rem;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
}

.solution-card {
    background: #f8fafc;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    overflow: hidden;
}

.card-header {
    background: #f1f5f9;
    padding: 1rem;
}

.card-body {
    padding: 1.5rem;
}

.input-group {
    margin-bottom: 1rem;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.add-solution-btn {
    width: 100%;
    padding: 1rem;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    margin-top: 1rem;
}

.notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.action-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.action-item {
    display: flex;
    gap: 0.5rem;
}

.date-input {
    width: auto;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    }
}

@media (max-width: 768px) {
    .worksheet-container {
        padding: 1rem;
    }
    
    .progress-tracker {
        flex-direction: column;
        gap: 1rem;
    }
    
    .progress-line {
        width: 2px;
        height: 20px;
        margin: 0;
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
function toggleSection(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    content.classList.toggle('active');
    icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : '';
}

function addQuestion() {
    const input = document.querySelector('.question-input');
    const container = document.getElementById('questions-container');
    if (input.value.trim()) {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'goal-item';
        questionDiv.textContent = input.value;
        container.appendChild(questionDiv);
        input.value = '';
    }
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.style.textDecoration = 'line-through';
            this.parentElement.style.opacity = '0.7';
        } else {
            this.parentElement.style.textDecoration = 'none';
            this.parentElement.style.opacity = '1';
        }
    });
});

document.querySelector('.add-solution-btn').addEventListener('click', function() {
    const template = document.querySelector('.solution-card').cloneNode(true);
    template.querySelectorAll('input, textarea').forEach(input => input.value = '');
    this.insertAdjacentElement('beforebegin', template);
});

document.querySelector('.add-action-btn').addEventListener('click', function() {
    const template = document.querySelector('.action-item').cloneNode(true);
    template.querySelectorAll('input').forEach(input => input.value = '');
    this.insertAdjacentElement('beforebegin', template);
});

function prepareForPrint() {
    // Gather all input values
    const worksheetData = {
        checkboxes: Array.from(document.querySelectorAll('input[type="checkbox"]')).map(cb => ({
            label: cb.parentElement.textContent.trim(),
            checked: cb.checked
        })),
        textareas: Array.from(document.querySelectorAll('textarea')).map(ta => ({
            label: ta.previousElementSibling ? ta.previousElementSibling.textContent : 'Notes',
            value: ta.value
        })),
        textInputs: Array.from(document.querySelectorAll('input[type="text"]')).map(input => ({
            label: input.placeholder,
            value: input.value
        })),
        dateInputs: Array.from(document.querySelectorAll('input[type="date"]')).map(input => ({
            label: 'Due Date',
            value: input.value
        }))
    };

    // Save to localStorage
    localStorage.setItem('worksheetData', JSON.stringify(worksheetData));

    // Print the page
    window.print();
}

// Load saved data when page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('worksheetData');
    if (savedData) {
        const data = JSON.parse(savedData);
        
        // Restore checkboxes
        data.checkboxes.forEach(item => {
            const checkbox = Array.from(document.querySelectorAll('input[type="checkbox"]'))
                .find(cb => cb.parentElement.textContent.trim() === item.label);
            if (checkbox) checkbox.checked = item.checked;
        });
        
        // Restore textareas
        data.textareas.forEach(item => {
            const textarea = Array.from(document.querySelectorAll('textarea'))
                .find(ta => ta.previousElementSibling && ta.previousElementSibling.textContent === item.label);
            if (textarea) textarea.value = item.value;
        });
        
        // Restore text inputs
        data.textInputs.forEach(item => {
            const input = Array.from(document.querySelectorAll('input[type="text"]'))
                .find(inp => inp.placeholder === item.label);
            if (input) input.value = item.value;
        });
        
        // Restore date inputs
        data.dateInputs.forEach(item => {
            const input = document.querySelector('input[type="date"]');
            if (input) input.value = item.value;
        });
    }
});
</script>