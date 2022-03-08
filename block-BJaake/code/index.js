let select = document.getElementById("sources");
let display = document.querySelector(".display");
let filterData;

function createUI(data) {
  data.forEach((obj) => {
    let figure = document.createElement("figure");
    figure.classList.add("flex-48");
    let img = document.createElement("img");
    img.src = obj.imageUrl;
    img.classList.add("full");
    figure.append(img);
    let article = document.createElement("article");
    article.classList.add("flex-48");
    let span = document.createElement("span");
    span.innerText = obj.newsSite;
    let p = document.createElement("p");
    p.innerText = obj.title;
    let a = document.createElement("a");
    a.href = obj.url;
    a.innerText = "Read More";
    article.append(span, p, a);
    let li = document.createElement("li");
    li.classList.add("flex", "justify-between", "align-stretch");
    li.append(figure, article);
    display.append(li);
  });
}

function handleSelect(e) {
  let url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=30";
  fetch(url).then(createUI);
}
function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, url);
    xhr.onload = () => resolve(JSON.parse(xhr.response));
    xhr.onerror = () => reject("Something went wrong");
    xhr.send();
  });
}

fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30").then(
  (data) => {
    data.forEach((obj) => {
      let option = document.createElement("option");
      option.innerText = obj.newsSite;
      select.append(option);
    });
  }
);
select.addEventListener("change", handleSelect);
