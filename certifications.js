// Get all the button
const $button_1 = document.getElementById("certification_1"),
  $button_2 = document.getElementById("certification_2"),
  $button_3 = document.getElementById("certification_3"),
  $button_4 = document.getElementById("certification_4"),
  $button_5 = document.getElementById("certification_5"),
  $button_6 = document.getElementById("certification_6");
// now we adding a event to the button and open it the respectivy page

$button_1.addEventListener("click", () => {
  window.open(
    "https://www.freecodecamp.org/certification/RiandryConnor/responsive-web-design"
  );
});

$button_2.addEventListener("click", () => {
  window.open(
    "https://www.freecodecamp.org/certification/RiandryConnor/javascript-algorithms-and-data-structures-v8"
  );
});
$button_3.addEventListener("click", () => {
  window.open(
    "https://www.freecodecamp.org/certification/RiandryConnor/front-end-development-libraries"
  );
});
$button_4.addEventListener("click", () => {
  window.open(
    "https://www.freecodecamp.org/certification/RiandryConnor/data-visualization"
  );
});
$button_5.addEventListener("click", () => {
  window.open("https://www.freecodecamp.org/certification/RiandryConnor/back-end-development-and-apis");
});

$button_6.addEventListener("click", () => {
  window.open("https://www.freecodecamp.org/certification/RiandryConnor/javascript-algorithms-and-data-structures");
});
