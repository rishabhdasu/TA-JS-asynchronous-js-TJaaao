let root = document.querySelector(".root");
let input = document.querySelector("input");
let followerClass = document.querySelector(".followerClass");
let followingClass = document.querySelector(".followingClass");

function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));
  xhr.onerror = function () {
    console.log("Something went wrong");
  };
  xhr.send();
}

function createLists(url, rootElm) {
  rootElm.innerHTML = "";
  fetch(url, function (list) {
    let topFive = list.slice(0, 5);
    topFive.forEach((fol) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let figure = document.createElement("figure");
      figure.classList.add("figure");
      img.src = fol.avatar_url;
      figure.append(img);
      li.append(figure);
      rootElm.append(li);
    });
  });
}

function createUI(data) {
  root.innerHTML = "";
  let userImg = document.createElement("img");
  let name = document.createElement("h2");
  let userId = document.createElement("h3");
  let figure = document.createElement("figure");
  userImg.src = data.avatar_url;
  figure.classList.add("figure");
  figure.append(userImg);
  name.innerText = data.name;
  userId.innerText = data.login;
  root.append(figure, name, userId);
  createLists(
    `https://api.github.com/users/${data.login}/followers`,
    followerClass
  );
  createLists(
    `https://api.github.com/users/${data.login}/following`,
    followingClass
  );
  followerClass.innerText = "Followers :";
  followingClass.innerText = "Followings :";
}

function handler(e) {
  if (e.keyCode === 13) {
    const url = `https://api.github.com/users/`;
    let userName = input.value;
    fetch(url + userName, createUI);
    input.value = "";
  }
}

input.addEventListener("keyup", handler);

// Random Cat Generator

let img = document.querySelector(".cats img");
let button = document.querySelector("button");

function handleCat() {
  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
    function (cat) {
      img.src = cat[0].url;
    }
  );
}

button.addEventListener(`click`, handleCat);
