function initCertificatesTab() {
  const buttons = document.querySelectorAll(".cert-btn");
  const tabs = document.querySelectorAll(".cert-tab");

  if (buttons.length === 0) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // highlight correct button
      buttons.forEach(x => x.classList.remove("active"));
      btn.classList.add("active");

      let tab = btn.dataset.tab;

      tabs.forEach(t => t.classList.remove("active"));
      document.getElementById("tab-" + tab).classList.add("active");
    });
  });
}

initCertificatesTab();
