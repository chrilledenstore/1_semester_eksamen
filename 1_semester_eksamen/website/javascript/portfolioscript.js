document.querySelector(".tema1_selector").addEventListener("click", visTema1);
document.querySelector(".tema2_selector").addEventListener("click", visTema2);
document.querySelector(".tema3_selector").addEventListener("click", visTema3);
document.querySelector(".tema4_selector").addEventListener("click", visTema4);
document.querySelector(".tema5_selector").addEventListener("click", visTema5);

function visTema1() {
  console.log("vis tema 1");

  hideAll();

  document.querySelector(".tema1").classList.remove("hide_element");
  document.querySelector(".tema1_selector").classList.add("tema_selected");
}

function visTema2() {
  console.log("vis tema 2");

  hideAll();

  document.querySelector(".tema2").classList.remove("hide_element");
  document.querySelector(".tema2_selector").classList.add("tema_selected");
}

function visTema3() {
  console.log("vis tema 3");

  hideAll();

  document.querySelector(".tema3").classList.remove("hide_element");
  document.querySelector(".tema3_selector").classList.add("tema_selected");
}

function visTema4() {
  console.log("vis tema 4");

  hideAll();

  document.querySelector(".tema4").classList.remove("hide_element");
  document.querySelector(".tema4_selector").classList.add("tema_selected");
}

function visTema5() {
  console.log("vis tema 5");

  hideAll();

  document.querySelector(".tema5").classList.remove("hide_element");
  document.querySelector(".tema5_selector").classList.add("tema_selected");
}

function hideAll() {
  document.querySelector(".tema1").classList.add("hide_element");
  document.querySelector(".tema1_selector").classList.remove("tema_selected");

  document.querySelector(".tema2").classList.add("hide_element");
  document.querySelector(".tema2_selector").classList.remove("tema_selected");

  document.querySelector(".tema3").classList.add("hide_element");
  document.querySelector(".tema3_selector").classList.remove("tema_selected");

  document.querySelector(".tema4").classList.add("hide_element");
  document.querySelector(".tema4_selector").classList.remove("tema_selected");

  document.querySelector(".tema5").classList.add("hide_element");
  document.querySelector(".tema5_selector").classList.remove("tema_selected");
}
