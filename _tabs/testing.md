---
title: testing
#icon: fa-solid fa-clipboard-question
layout: page
permalink: /testing/
toc: true
order: 14

---
<!--TEST 1 -->
<!-- HTML -->
<div class="tooltip">Hover over me Test 1
  <span class="tooltiptext">Tooltip text</span>
</div>

<!-- CSS -->
<style>
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the element */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>

<!-- TEST 2 -->

<!-- HTML -->
<div class="tooltip" onmouseover="showTooltip(this)" onmouseout="hideTooltip(this)">
  Hover over me
  <span class="tooltiptext">Tooltip text: test 2</span>
</div>

<!-- CSS -->
<style>
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the element */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}
</style>

<!-- JavaScript -->
<script>
function showTooltip(element) {
  const tooltip = element.querySelector('.tooltiptext');
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = '1';
}

function hideTooltip(element) {
  const tooltip = element.querySelector('.tooltiptext');
  tooltip.style.visibility = 'hidden';
  tooltip.style.opacity = '0';
}
</script>


<!-- TEST 3 -->

<!-- HTML -->
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip text">
  Hover over me: test 3
</button>

<!-- Add this to your head or layout -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<!-- JavaScript to Initialize Tooltips -->
<script>
document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
</script>



<!-- TEST 4 -->

<!-- HTML -->
<div class="tooltip" role="tooltip" aria-label="Tooltip text">
  Hover over me
</div>

<!-- CSS -->
<style>
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip[aria-label]:hover::after {
  content: attr(aria-label);
  position: absolute;
  bottom: 125%; /* Position above the element */
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 1;
}
</style>



<!-- TEST 5 -->

<!-- HTML -->
<div class="relative group">
  Hover over me
  <span class="absolute left-1/2 bottom-full mb-2 w-32 transform -translate-x-1/2 scale-0 rounded bg-black p-2 text-white group-hover:scale-100">
    Tooltip text test 6
  </span>
</div>

<!-- Tailwind CSS CDN -->
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">


<!-- TEST 6 -->

<!-- HTML -->
<div class="tooltip" onmousemove="dynamicTooltip(event, this)" onmouseleave="hideDynamicTooltip()">
  Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>

<!-- CSS -->
<style>
.tooltip .tooltiptext {
  display: none;
  position: fixed;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 4px;
}
</style>

<!-- JavaScript -->
<script>
function dynamicTooltip(event, element) {
  const tooltip = element.querySelector('.tooltiptext');
  tooltip.style.display = 'block';
  tooltip.style.left = `${event.pageX + 10}px`;
  tooltip.style.top = `${event.pageY + 10}px`;
}

function hideDynamicTooltip() {
  document.querySelectorAll('.tooltiptext').forEach(tooltip => {
    tooltip.style.display = 'none';
  });
}
</script>
