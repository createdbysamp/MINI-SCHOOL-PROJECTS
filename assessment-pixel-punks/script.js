function addToCart() {
  const cartTally = document.querySelector("#cart-tally");
  cartTally.innerText++;
}

function searchBar(id) {
  const searched = document.querySelector(id);
  let searchInput = searched.value;

  if (searchInput == "") return alert(`you need to search for something!`);
  setTimeout(() => alert(`Currently searching for ... ${searchInput}`), 500);
}

function arrow() {
  let images = document.querySelector("#blaster-rex");

  if (images.src.endsWith("blasterrex.webp")) {
    images.src = "./files/blasterrex-2.webp";
    images.alt = "blaster-rex-art2";
  } else {
    images.src = "./files/blasterrex.webp";
    images.alt = "blaster-rex-art";
  }
}
