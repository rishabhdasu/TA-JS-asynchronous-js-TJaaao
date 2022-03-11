let root = document.querySelector(".root");
let root2 = document.querySelector(".root2");
let header = document.querySelector("header");

function handleSpin(rootELm, status = false) {
  if (status) {
    rootELm.innerHTML = `<div class = "loading"><div class="donut"></div>Loading...</div>`;
  }
}

function displayUI(data) {
  root.innerHTML = "";
  data.forEach((d) => {
    let li = document.createElement("li");
    h2 = document.createElement("h2");
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
      root.style.display = "flex";
      header.style.display = "block";
    });
    li.append(h2, h3, button);
    root.append(li);
  });
}

function displayCharacters(data) {
  let charList = document.querySelector(".charList");
  charList.innerHTML = "";
  Promise.all(
    data.characters.map((d) =>
      fetch(d)
        .then((res) => res.json())
        .then((el) => {
          p = document.createElement("p");
          p.innerText = `${el.name} : (${el.aliases})`;
          charList.append(p);
          root2.append(charList);
        })
    )
  );
}

function fetchData() {
  handleSpin(root, true);
  fetch(`https://www.anapioficeandfire.com/api/books`)
    .then((res) => res.json())
    .then((data) => {
      displayUI(data);
    })
    .finally(() => {
      handleSpin(root);
    });
}
fetchData();
