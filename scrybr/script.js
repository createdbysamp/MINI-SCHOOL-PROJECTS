console.log("heyo cutie");

function scryClick(buttonId) {
  let button = document.querySelector("#drakScry");
  let clickTotal = Number(button.innerText);
  button.innerText = clickTotal + 1;
}

function scryClick2(button) {
  let buttonId = button.parentElement.querySelector("span[id$='Scry']");
  let clickTotal = Number(buttonId.innerText);
  buttonId.innerText = clickTotal + 1;
}

function tactile(element) {
  element.style.backgroundColor = "rgba(90, 76, 172, 0.3)";
}

function nontactile(element) {
  element.style.backgroundColor = "rgba(90, 76, 172, 0.483)";
}

function nontactileElem(element) {
  element.style.backgroundColor = "rgb(90, 76, 172)";
}
