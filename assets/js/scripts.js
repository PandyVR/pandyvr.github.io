// MAIN TAB SYSTEM

const tabs = document.querySelectorAll("[data-tab-target]");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

const target = document.querySelector(tab.dataset.tabTarget);

panels.forEach(panel => panel.classList.remove("active"));
tabs.forEach(t => t.classList.remove("active"));

target.classList.add("active");
tab.classList.add("active");

});

});


// SUB TAB SYSTEM

const subtabs = document.querySelectorAll("[data-subtab-target]");
const subpanels = document.querySelectorAll(".subtab-panel");

subtabs.forEach(tab => {

tab.addEventListener("click", () => {

const target = document.querySelector(tab.dataset.subtabTarget);

subpanels.forEach(panel => panel.classList.remove("active"));
subtabs.forEach(t => t.classList.remove("active"));

target.classList.add("active");
tab.classList.add("active");

});

});
