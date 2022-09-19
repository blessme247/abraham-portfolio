gsap.from(".socials", {duration: 8, y: 80, ease: "bounce"});
gsap.from(".image", {duration: 10, scale: 0.4, opacity: 0, ease: "bounce"});
gsap.from(".project-card", {duration: 6, scale: 0.1, ease: "bounce"});

const navbar = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('.body');

navToggle.addEventListener('click', () => {
  const visibility = navbar.getAttribute('data-visible');
  if (visibility === "false") {
    navbar.style.zIndex = '999'
    navbar.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    body.style.overflow = 'hidden'
  } else if (visibility === "true") {
    navbar.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    body.style.overflow = 'visible'
  }
})
