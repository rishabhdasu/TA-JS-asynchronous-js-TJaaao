let root = document.querySelector(".root");
let input = document.querySelector("input");
let followerClass = document.querySelector(".followerClass");
let followingClass = document.querySelector(".followingClass");

function createUI(data) {
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
}

function createFollower(userData1) {
  followerClass.innerText = "Followers :";
  userData1.forEach((fol) => {
    let followerImg = document.createElement("img");
    let figure1 = document.createElement("figure");
    figure1.classList.add("figure1");
    followerImg.src = fol.avatar_url;
    figure1.append(followerImg);
    followerClass.append(figure1);
  });
}

function createFollowing(userData2) {
  followingClass.innerText = "Followings :";
  userData2.forEach((fol) => {
    let followingImg = document.createElement("img");
    let figure2 = document.createElement("figure");
    figure2.classList.add("figure2");
    followingImg.src = fol.avatar_url;
    figure2.append(followingImg);
    followingClass.append(figure2);
  });
}

let xhr = new XMLHttpRequest();

function handler(e) {
  let val = e.target.value;
  if (e.keyCode === 13) {
    xhr.open("GET", `https://api.github.com/users/${val}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      createUI(userData);
    };
    xhr.send();
    value = " ";

    let xhr1 = new XMLHttpRequest();
    xhr1.open("GET", `https://api.github.com/users/${val}/followers`);
    xhr1.onload = function () {
      let userData1 = JSON.parse(xhr1.response);
      createFollower(userData1);
    };
    xhr1.send();
    value = " ";

    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", `https://api.github.com/users/${val}/following`);
    xhr2.onload = function () {
      let userData2 = JSON.parse(xhr2.response);
      createFollowing(userData2);
    };
    xhr2.send();
    value = " ";
  }
}

input.addEventListener("keyup", handler);
