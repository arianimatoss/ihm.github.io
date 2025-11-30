window.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      openModal();

      form.reset();
    });
  }
});

function openModal() {
  const modal = document.getElementById("scheduleModal");
  if (modal) {
    modal.classList.add("active");
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
}

function closeModal() {
  const modal = document.getElementById("scheduleModal");
  if (modal) {
    modal.classList.remove("active");
  }
}
