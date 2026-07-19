const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.13 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll("[data-placeholder]").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

const phoneStages = document.querySelectorAll(".phone-stage");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  phoneStages.forEach((stage) => {
    const phone = stage.querySelector(".phone");
    if (!phone) return;

    stage.addEventListener("pointermove", (event) => {
      if (window.innerWidth < 900) return;
      const bounds = stage.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      phone.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
    });

    stage.addEventListener("pointerleave", () => {
      phone.style.removeProperty("transform");
    });
  });
}
