console.log("Contact page loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = form.fullname.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before sending!");
      return;
    }

    // Simulate send
    alert(`✅ Thanks ${name}! Your message has been sent successfully.`);

    // Reset form
    form.reset();
  });
});
