let input = document.querySelector("input");
let div = document.querySelector(".div");

function displayImg(data) {
  div.innerHTML = "";
  let final = data.results;
  final.forEach((im) => {
    let img = document.createElement("img");
    img.src = im.urls.small;
    img.classList.add("full");
    let figure = document.createElement("figure");
    figure.classList.add("flex-33");
    figure.append(img);
    div.append(figure);
  });
}

function handleInput(e) {
  if (e.keyCode === 13) {
    let url = `https://api.unsplash.com/search/photos/?query=${e.target.value}&client_id=181lKfOJmdxVuHpLFWstxWjEBkWeZpT7zbsddVHINLM`;
    fetch(url, displayImg);
    console.log(url);
    e.target.value = "";
  }
}

function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open(`GET`, url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));
  xhr.onerror = function () {
    console.log("Something went wrong");
  };
  xhr.send();
}

input.addEventListener("keyup", handleInput);
