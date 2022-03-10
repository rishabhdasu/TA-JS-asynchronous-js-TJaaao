let root = document.querySelector(".root");
let root2 = document.querySelector(".root2");
let header = document.querySelector("header");

function handleSpin(status = false) {
  if (status) {
    ul.innerHTML = `<div class="donut"></div>`;
  }
}

function displayUI(data) {
  root.innerHTML = "";
  data.forEach((d) => {
    let li = document.createElement("li");
    li.classList.add(
      "flex-50",
      "flex",
      "justify-center",
      "column",
      "align-center"
    );
    let h2 = document.createElement("h2");
    h2.innerText = d.name;
    let h3 = document.createElement("h3");
    h3.innerText = d.authors;
    let button = document.createElement("button");
    button.innerText = `Show Characters (${d.characters.length})`;
    button.addEventListener(`click`, () => {
      root2.style.display = "block";
      root.style.display = "none";
      header.style.display = "none";
      displayCharacters(d);
    });
    let close = document.querySelector(".close");
    close.addEventListener(`click`, () => {
      root2.style.display = "none";
      root.style.display = "block";
      header.style.display = "block";
    });
    li.append(h2, h3, button);
    root.append(li);
  });
}

function displayCharacters(data) {
  data.characters.forEach((elm) => {
    fetch(elm)
      .then((res) => res.json())
      .then((el) => {
        let p = document.createElement("p");
        p.innerText = `${el.name} : (${el.aliases})`;
        root2.append(p);
      });
  });
}

function fetchData() {
  fetch(`https://www.anapioficeandfire.com/api/books`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayUI(data);
    });
}
fetchData();
