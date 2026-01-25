'use strict';

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const navButtons = document.querySelectorAll("[data-nav]");
const pageContainer = document.getElementById("page-container");

// Toggle sidebar
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Load a page dynamically
async function loadPage(page) {
  try {
    const response = await fetch(`./pages/${page}.html`);
    const content = await response.text();
    pageContainer.innerHTML = content;

    // load that page’s JS
    const script = document.createElement("script");
    script.src = `./scripts/${page}.js`;
    document.body.appendChild(script);
  } catch (error) {
    pageContainer.innerHTML = `<p style="color:white; text-align:center;">Error loading ${page}.html 😢</p>`;
  }
}

// Default page
loadPage("about");

// Navbar link handling
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".navbar-link.active").classList.remove("active");
    btn.classList.add("active");
    loadPage(btn.dataset.nav);
    window.scrollTo(0, 0);
  });
});
