export const accordion = () => {
  const parent = document?.querySelector(".faq__items");

  parent?.addEventListener("click", (e) => {
    if (e.target.classList.contains("faq__item-toggler")) {
      openAccordion(e.target);
    }
    return;
  });

  function openAccordion(target) {
    let parent = target.closest(".faq__item");

    parent.classList.toggle("faq__item--active");
  }
};
