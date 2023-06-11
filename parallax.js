window.addEventListener('scroll', function() 
{
  const scrolled = window.scrollY;
  const parallaxContent = document.querySelector('.parallax-content');
  parallaxContent.style.transform = `translateY(${scrolled}px)`;
});
