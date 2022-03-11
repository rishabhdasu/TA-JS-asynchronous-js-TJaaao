let baseUrl = `https://sleepy-falls-37563.herokuapp.com/api/todo`;

fetch(baseUrl)
  .then((res) => res.json())
  .then(console.log);

let data = {
  todo: {
    title: "Drink water!",
    isCompleted: false,
  },
};

fetch(baseUrl, {
  method: "PUT", // *GET, POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header
});
