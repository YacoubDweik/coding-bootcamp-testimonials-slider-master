let sliderValue = 0;
let sectionsArray = document.querySelectorAll(".container");

sectionsArray.forEach((section) =>
  section.classList.remove("active")
);
sectionsArray[sliderValue].classList.add("active");

let previousButton = document.querySelectorAll(
  ".button img:first-of-type"
);

previousButton.forEach((button) => {
  button.addEventListener("click", () => {
    sectionsArray.forEach((section) =>
      section.classList.remove("active")
    );
    if (sliderValue == 0) {
      sliderValue = sectionsArray.length - 1;
    } else if (sliderValue == sectionsArray.length - 1) {
      sliderValue = 0;
    } else {
      sliderValue--;
    }
    sectionsArray[sliderValue].classList.add("active");
  });
});

let nextButton = document.querySelectorAll(
  ".button img:last-of-type"
);

nextButton.forEach((button) => {
  button.addEventListener("click", () => {
    sectionsArray.forEach((section) =>
      section.classList.remove("active")
    );
    if (sliderValue == 0) {
      sliderValue = sectionsArray.length - 1;
    } else if (sliderValue == sectionsArray.length - 1) {
      sliderValue = 0;
    } else {
      sliderValue++;
    }
    sectionsArray[sliderValue].classList.add("active");
  });
});
