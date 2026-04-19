const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
mobileMenu.classList.toggle("hidden");
});

const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("form-success");
  const submitBtn = form.querySelector("button");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {

        successMessage.classList.remove("hidden");

        form.reset();

        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 3000);

      } else {
        alert("Something went wrong. Please try again.");
      }

    } catch (error) {
      alert("Network error. Please try again.");
    }

    submitBtn.textContent = "Send Message";
    submitBtn.disabled = false;
  });