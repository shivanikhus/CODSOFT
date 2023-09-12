const allSection = document.querySelectorAll('.section--hidden');
const allImages = document.querySelectorAll('.b-img');

const secMov = function (enteries) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  sectionObserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(secMov, { threshold: 0.1 });
allSection.forEach(sec => sectionObserver.observe(sec));

const lazyImg = function (enteries) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  console.log(entry);
  entry.target.addEventListener('load', function () {
    console.log('loaded');
  });
  entry.target.classList.remove('blur');
  imgObserver.unobserve(entry.target);

};
const imgObserver = new IntersectionObserver(lazyImg, { rootMargin: '-200px' });
allImages.forEach(img => imgObserver.observe(img));
