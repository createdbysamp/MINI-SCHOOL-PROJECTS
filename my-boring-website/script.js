// function partyHeader(elem) {
//   elem.style.backgroundColor = "yellow";
// }

// function partyH1(elem) {
//   elem.innerText = "Let's GOOOOOOOOOOOAL!";
//   elem.style.color = "aquamarine";
// }

// function boringHeader(elem) {
//   elem.style.backgroundColor = "slategrey";
// }

// function boringH1(elem) {
//   elem.innerText = "My Boring Website";
//   elem.style.color = "black";
// }

function partyMode(headerElem) {
  const h1 = headerElem.querySelector("h1");
  headerElem.style.backgroundColor = "yellow";

  if (h1) {
    h1.innerText = "Let's GOOOOOOOOOOOAL!";
    h1.style.color = "aquamarine";
  }
}

function boringMode(headerElem) {
  headerElem.style.backgroundColor = "slategrey";

  const h1 = headerElem.querySelector("h1");

  if (h1) {
    h1.innerText = "My Boring Website";
    h1.style.color = "black";
  }
}

function mainClick(main) {
  main.style.backgroundColor = "blue";
}

function h2Click(h2, event) {
  if (event) {
    event.stopPropagation();
  }
  h2.style.color = "yellow";
  h2.innerText = "A Brilliant Azure Sky";
}

function pClick(p, event) {
  if (event) {
    event.stopPropagation();
  }
  p.style.color = "whitesmoke";
  p.innerText =
    "Colossal, tempestuous clouds churned and roiled with an almost palpable energy. The sun, a blazing orb of pure power, scorched the very air, casting razor-sharp shadows that danced and writhed across the parched earth below. Every fiber of the ground vibrated with an unseen force, a primal pulse that resonated deep within.";
}

function emoji1on(elem) {
  elem.innerText = "🤣";
}
function emoji2on(elem) {
  elem.innerText = "😌";
}
function emoji3on(elem) {
  elem.innerText = "🥳";
}

function emojiOff(elem) {
  elem.innerText = "😐";
}

function h3Change(h3) {
  h3.innerText = "Fun Fact!!";
}

function pAsideChange(p) {
  p.innerText =
    'Chewbacca in "Star Wars" is based on George Lucas dog, an Alaskan Malamute named "Indiana," who also inspired "Indiana Jones."';
}

function clickedThis(elem) {
  elem.remove();
}
