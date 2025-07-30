export const modalProperty = () => {
  const propertyButtons = document?.querySelectorAll(".property-js-btn");
  const modalProperty = document?.getElementById("modal-property");
  const modalTitle = modalProperty?.querySelector(".modal-property__title");
  const modalContent = modalProperty?.querySelector(".modal-property__content");
  propertyButtons?.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parent = e.target.closest(".about__property-item");
      const title = parent.querySelector(".property-js-btn").textContent;
      const desc = parent.querySelector(
        ".about__property-item-desc"
      ).textContent;

      modalTitle.textContent = title;
      modalContent.textContent = desc;

      modalProperty.classList.add("modal-property--active");
    });
  });
};
