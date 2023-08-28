const links = document.querySelectorAll('a[href^="#"]');
const scrollToTopButton = document.getElementById('scrollToTop');
const body = document.body;
const html = document.documentElement;

links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

scrollToTopButton.addEventListener('click', scrollToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const offsetTop =
      targetElement.getBoundingClientRect().top + window.scrollY;

    anime({
      targets: [body, html],
      scrollTop: offsetTop,
      duration: 1000,
      easing: 'easeInOutQuad',
    });
  }
}

function scrollToTop() {
  anime({
    targets: [body, html],
    scrollTop: 0,
    duration: 1000,
    easing: 'easeInOutQuad',
  });
}
