const accordionHeaders = document.querySelectorAll(".accordion__header");

const accordionHandler = (event) => {
  const underAccordion = event.target.nextElementSibling;
  const arrowhead = event.target.children[0];
  event.target.classList.toggle("active");
  underAccordion.classList.toggle("accordion--collapse");
  arrowhead.classList.toggle("accordion-svg--active");
};
accordionHeaders.forEach((accordion) => {
  accordion.addEventListener("click", accordionHandler);
});
