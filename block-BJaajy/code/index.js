/* - Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value.
 Using `Promise.all` log the value of each promise that it resolved with. */
let one = new Promise((res, rej) => {
  setTimeout(() => {
    res("one");
  }, 1000);
});
let two = new Promise((res, rej) => {
  setTimeout(() => {
    res("two");
  }, 2000);
});
let three = new Promise((res, rej) => {
  setTimeout(() => {
    res("three");
  }, 3000);
});
let four = new Promise((res, rej) => {
  setTimeout(() => {
    res("four");
  }, 4000);
});
let all = Promise.all([one, two, three, four])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
/* - Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API.
 Log the number of followers of each user. */
const userName = ["Aditya17Singh", "prank7", "getify", "piranha", "gaearon"];

const usernamePromise = Promise.all(
  userName.map((user) => {
    console.log(user);
    return fetch(`https://api.github.com/users/${user}`).then((res) =>
      res.json()
    );
  })
).then((user) => {
  user.forEach((elm) => console.log(elm.followers));
});
