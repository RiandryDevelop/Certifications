// Get all the button
const $button_1 = document.getElementById("certification_1"),
  $button_2 = document.getElementById("certification_2"),
  $button_3 = document.getElementById("certification_3"),
  $button_4 = document.getElementById("certification_4");

// now we adding a event to the button and open it the respectivy page

$button_1.addEventListener("click", () => {
  window.open(
    "https://www.freecodecamp.org/certification/RiandryConnor/responsive-web-design"
  );
});

$button_2.addEventListener("click", () => {
  window.open(
    "https://www.freecodecamp.org/certification/RiandryConnor/javascript-algorithms-and-data-structures"
  );
});
$button_3.addEventListener("click", () => {
  window.open(
    "https://www.freecodecamp.org/certification/RiandryConnor/front-end-development-libraries"
  );
});
$button_4.addEventListener("click", () => {
  window.open("#");
});
