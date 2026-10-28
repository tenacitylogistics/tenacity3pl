document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = form.querySelector("button[type='submit']");
    const originalText = button.textContent;

    button.textContent = "Inquiry Sent";
    button.disabled = true;

    form.reset();

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 2200);
  });
});
