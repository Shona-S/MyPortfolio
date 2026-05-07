// Initialize global state object to persist data across tab navigations
if (!window.certificatesApp) {
  window.certificatesApp = {
    originalCertificates: [
      {
        id: 1,
        title: "Cloud Computing",
        provider: "NPTEL",
        category: "NPTEL",
        url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S105260067103876903",
        img: "./assets/certificates/nptel(3).png",
        date: "2024"
      },
      {
        id: 2,
        title: "Machine Learning",
        provider: "NPTEL",
        category: "NPTEL",
        url: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS50S44420017801223874",
        img: "./assets/certificates/nptel(2).png",
        date: "2024"
      },
      {
        id: 3,
        title: "Moral Thinking: An Introduction to Values and Ethics",
        provider: "NPTEL",
        category: "NPTEL",
        url: "https://nptel.ac.in/noc/E_Certificate/NPTEL25HS219S116020006310309696",
        img: "./assets/certificates/nptel(1).png",
        date: "2024"
      },
      {
        id: 4,
        title: "Data Visualization with Tableau",
        provider: "Coursera",
        category: "Data Analytics",
        url: "https://www.coursera.org/account/accomplishments/records/4K17OXHS6PQW",
        img: "./assets/certificates/coursera (2).png",
        date: "2024"
      },
      {
        id: 5,
        title: "What is Data Science?",
        provider: "IBM",
        category: "Data Analytics",
        url: "https://www.coursera.org/account/accomplishments/records/M5HCHNAH4ZND",
        img: "./assets/certificates/coursera (3).png",
        date: "2024"
      },
      {
        id: 6,
        title: "Microsoft Excel",
        provider: "Coursera",
        category: "Data Analytics",
        url: "https://www.coursera.org/account/accomplishments/records/BURN65LXMREX",
        img: "./assets/certificates/coursera (4).png",
        date: "2024"
      },
      {
        id: 7,
        title: "Python for Data Analysis",
        provider: "Coursera",
        category: "Data Analytics",
        url: "https://www.coursera.org/account/accomplishments/records/M5HCHNAH4ZND",
        img: "./assets/certificates/coursera (5).png",
        date: "2024"
      },
      {
        id: 8,
        title: "Power BI",
        provider: "Deprecated Guided Projects",
        category: "Data Analytics",
        url: "https://www.coursera.org/account/accomplishments/records/V27C3PHAMZTZ",
        img: "./assets/certificates/coursera (1).png",
        date: "2024"
      },
      {
        id: 9,
        title: "Introduction to Generative AI",
        provider: "Google Cloud",
        category: "AI & ML",
        url: "https://www.coursera.org/account/accomplishments/records/ZVVWHSJ4RZX2",
        img: "./assets/certificates/coursera (8).png",
        date: "2024"
      },
      {
        id: 10,
        title: "Fake News Detection with Machine Learning",
        provider: "Coursera",
        category: "AI & ML",
        url: "https://www.coursera.org/account/accomplishments/records/PE555PQ55BRD",
        img: "./assets/certificates/coursera (9).png",
        date: "2024"
      },
      {
        id: 11,
        title: "Generative AI for Data Engineers",
        provider: "IBM",
        category: "AI & ML",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/QH1S1QAG44ZZ2",
        img: "./assets/certificates/coursera (6).png",
        date: "2024"
      },
      {
        id: 12,
        title: "Machine Learning",
        provider: "IBM",
        category: "AI & ML",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/KEC3H7989IR3",
        img: "./assets/certificates/coursera (7).png",
        date: "2024"
      },
      {
        id: 13,
        title: "Full Stack Software Developer",
        provider: "IBM",
        category: "Web Development",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/OFII82W1FL23",
        img: "./assets/certificates/web (1).png",
        date: "2024"
      },
      {
        id: 14,
        title: "Design and Develop a Website using Figma and CSS",
        provider: "Coursera",
        category: "Web Development",
        url: "https://www.coursera.org/account/accomplishments/records/R7964VAQUA2A",
        img: "./assets/certificates/web (2).png",
        date: "2024"
      },
      {
        id: 15,
        title: "Microsoft Certified: Azure Fundamentals",
        provider: "Microsoft",
        category: "Azure",
        url: "https://www.credly.com/earner/earned/share/af970f31-0f8d-4f37-93c5-3245b5710ffb",
        img: "./assets/certificates/azure.png",
        date: "2024"
      },
      {
        id: 16,
        title: "Ethical Leadership Through Giving Voice to Values",
        provider: "University of Virginia",
        category: "Soft Skills",
        url: "https://www.coursera.org/account/accomplishments/records/G80K0OP9UJSG",
        img: "./assets/certificates/soft (2).png",
        date: "2024"
      },
      {
        id: 17,
        title: "Value and Individual Decision Making",
        provider: "Yunus Social Business Fund Bengaluru",
        category: "Soft Skills",
        url: "https://www.coursera.org/account/accomplishments/records/F7UP0UDBJ1YR",
        img: "./assets/certificates/soft (1).png",
        date: "2024"
      },
      {
        id: 18,
        title: "A Life of Happiness and Fulfillment",
        provider: "Indian School of Business",
        category: "Soft Skills",
        url: "https://www.coursera.org/account/accomplishments/records/MFKQDUQ95G3VA",
        img: "./assets/certificates/soft (4).png",
        date: "2024"
      },
      {
        id: 19,
        title: "The Science of Well-Being",
        provider: "Yale University",
        category: "Soft Skills",
        url: "https://www.coursera.org/account/accomplishments/records/YH908DFRA87Z",
        img: "./assets/certificates/soft (3).png",
        date: "2024"
      }
    ],
    currentCategory: "All",
    searchQuery: "",
    currentSort: "latest"
  };
}

// Wrap execution in an IIFE to avoid global scope pollution and re-declaration errors
(function() {
  const app = window.certificatesApp;

  function renderDashboard() {
    const listContainer = document.getElementById("cert-list-container");
    const totalCountEl = document.getElementById("cert-total-count");
    if (!listContainer || !totalCountEl) return;

    // Filter from original dataset, never mutating it
    let filtered = app.originalCertificates.filter(cert => {
      const matchCategory = app.currentCategory === "All" || cert.category === app.currentCategory;
      const matchSearch = cert.title.toLowerCase().includes(app.searchQuery) || cert.provider.toLowerCase().includes(app.searchQuery);
      return matchCategory && matchSearch;
    });

    // Fallback: If filtered is somehow completely broken but original is not, restore.
    // (This handles weird state issues, though logic above is stable)
    if (filtered.length === 0 && app.searchQuery === "" && app.currentCategory === "All") {
      filtered = [...app.originalCertificates];
    }

    // Sort
    if (app.currentSort === "provider") {
      filtered.sort((a, b) => a.provider.localeCompare(b.provider));
    } else if (app.currentSort === "oldest") {
      filtered.sort((a, b) => a.id - b.id);
    } else {
      // latest
      filtered.sort((a, b) => b.id - a.id);
    }

    // Update Count
    totalCountEl.innerText = `${filtered.length} Certificate${filtered.length !== 1 ? 's' : ''}`;

    // Render HTML
    if (filtered.length === 0) {
      listContainer.innerHTML = `<div class="cert-empty">No certificates found.</div>`;
      return;
    }

    listContainer.innerHTML = filtered.map(cert => `
      <div class="cert-item">
        <div class="cert-thumb">
          <img src="${cert.img}" alt="${cert.title}" loading="lazy">
        </div>
        <div class="cert-info">
          <h3 class="cert-item-title">${cert.title}</h3>
          <p class="cert-item-source">${cert.provider} • ${cert.date}</p>
          <span class="cert-badge">${cert.category}</span>
        </div>
        <div class="cert-actions">
          <a href="${cert.url}" target="_blank" class="cert-view-btn">
            <span>View</span>
            <ion-icon name="open-outline"></ion-icon>
          </a>
        </div>
      </div>
    `).join("");
  }

  function updateCategoryCounts() {
    const categoryButtons = document.querySelectorAll(".cert-cat-btn");
    categoryButtons.forEach(btn => {
      const cat = btn.dataset.category;
      let count = 0;
      // Always count from the original dataset
      if (cat === "All") {
        count = app.originalCertificates.length;
      } else {
        count = app.originalCertificates.filter(c => c.category === cat).length;
      }
      const countSpan = btn.querySelector(".cert-cat-count");
      if (countSpan) countSpan.innerText = count;
    });
  }

  function initDashboard() {
    const searchInput = document.getElementById("cert-search-input");
    const sortSelect = document.getElementById("cert-sort-select");
    const categoryButtons = document.querySelectorAll(".cert-cat-btn");
    const mobileToggle = document.getElementById("cert-mobile-filter-btn");
    const sidebar = document.getElementById("cert-sidebar");
    const overlay = document.getElementById("cert-overlay");

    // Restore UI state from persistent app state
    if (searchInput) {
      searchInput.value = app.searchQuery;
      
      // Clean up old listeners (if any) to prevent duplication, 
      // though elements are recreated on tab switch anyway.
      searchInput.addEventListener("input", (e) => {
        app.searchQuery = e.target.value.toLowerCase();
        renderDashboard();
      });
    }

    if (sortSelect) {
      sortSelect.value = app.currentSort;
      sortSelect.addEventListener("change", (e) => {
        app.currentSort = e.target.value;
        renderDashboard();
      });
    }

    categoryButtons.forEach(btn => {
      // Restore active state
      if (btn.dataset.category === app.currentCategory) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }

      btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        app.currentCategory = btn.dataset.category;
        
        if (sidebar && sidebar.classList.contains("active")) {
          sidebar.classList.remove("active");
          if(overlay) overlay.classList.remove("active");
        }

        renderDashboard();
      });
    });

    if (mobileToggle && sidebar && overlay) {
      mobileToggle.addEventListener("click", () => {
        sidebar.classList.add("active");
        overlay.classList.add("active");
      });

      overlay.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      });
    }

    updateCategoryCounts();
    renderDashboard();
  }

  // Ensure DOM is ready, though it usually is when dynamically loaded via innerHTML
  initDashboard();
})();
