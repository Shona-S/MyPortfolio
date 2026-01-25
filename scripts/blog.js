console.log("Blog page loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const blogLinks = document.querySelectorAll(".blog-post-item a");

  blogLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const title = link.querySelector(".blog-item-title").innerText;
      alert(`Opening blog: ${title}`);
    });
  });
});
