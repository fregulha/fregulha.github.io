// ============================================================
// EDITE SOMENTE ESTES DADOS ANTES DE PUBLICAR
// ============================================================
const CONTACT = {
  whatsapp: "5567998701729", // DDI + DDD + número, somente números
  email: "fernandafregulha@gmail.com",
  linkedin: "https://www.linkedin.com/in/fernandafregulha",
  github: "https://github.com/fregulha",
  whatsappMessage: "Olá, Fernanda! Vi seu portfólio e gostaria de conversar sobre um serviço."
};

const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = whatsappUrl;
});

document.querySelectorAll(".email-link").forEach((link) => {
  link.href = `mailto:${CONTACT.email}`;
  link.textContent = CONTACT.email;
});

document.querySelectorAll(".email-link-icon").forEach((link) => {
  link.href = `mailto:${CONTACT.email}`;
});

document.querySelectorAll(".linkedin-link").forEach((link) => {
  link.href = CONTACT.linkedin;
});

document.querySelectorAll(".github-link").forEach((link) => {
  link.href = CONTACT.github;
});

const yearElement = document.getElementById("currentYear");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
