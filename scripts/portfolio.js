(() => {
  console.log("Portfolio page loaded!");

  const filterButtons = document.querySelectorAll("[data-filter]");
  const projects = document.querySelectorAll(".project-item");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active state
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
          project.style.display = "block";
          project.classList.add("active");
        } else {
          project.style.display = "none";
          project.classList.remove("active");
        }
      });
    });
  });

  // ⭐ Automatically trigger the "All" filter when page loads
  const defaultBtn = document.querySelector("[data-filter='all']");
  if (defaultBtn) defaultBtn.click();

})();
