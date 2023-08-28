const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  anime({
    targets: document.documentElement,
    scrollTop: targetElement.offsetTop,
    duration: 1750,
    easing: 'easeInOutQuad',
  });
}
