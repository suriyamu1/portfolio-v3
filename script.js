/* CONSTANTS */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header ul li a');
const cards    = document.querySelectorAll('.experience-card');

/* Sticky Navbar */
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky-navbar", window.scrollY > 0);
})

/* Active nav link */
window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => observer.observe(card));