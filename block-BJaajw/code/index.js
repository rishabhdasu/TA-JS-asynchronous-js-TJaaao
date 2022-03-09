(function () {
  let url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=30";
  let select = document.getElementById("sources");
  let display = document.querySelector(".display");
  let main = document.querySelector("main");
  let errorMessage = document.querySelector(".error-message");
  let wrap = document.querySelector(".wrap");
  let allNews = [];

  function handleError(message = `Something went wrong!`) {
    wrap.style.display = "none";
    errorMessage.innerText = message;
    errorMessage.style.display = "block";
  }

  function handleSpinner(status = false) {
    if (status) {
      display.innerHTML = `<div class="spinner"><div class="donut"></div></div>`;
    }
  }

  function createUI(data) {
    display.innerHTML = "";
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

  function createSources(data) {
    data.forEach((source) => {
      let option = document.createElement("option");
      option.innerText = source;
      option.value = source;
      select.append(option);
    });
  }

  function init() {
    handleSpinner(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Response is not OK`);
        }
      })
      .then((data) => {
        handleSpinner();
        allNews = data;
        createUI(data);
        let sources = Array.from(new Set(data.map((n) => n.newsSite)));
        createSources(sources);
      })
      .catch((error) => {
        console.log(error);
        handleError(error);
      })
      .finally(() => {
        handleSpinner();
      });
  }

  function handleSelect(e) {
    let source = e.target.value.trim();
    if (source) {
      var filteredNews = allNews.filter((news) => news.newsSite === source);
    } else {
      filteredNews = allNews;
    }
    createUI(filteredNews);
  }

  select.addEventListener("change", handleSelect);

  if (navigator.onLine) {
    init();
  } else {
    handleError("Check your internet connection ❌");
  }
})();
