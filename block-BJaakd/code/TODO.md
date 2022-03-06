1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
// Your code
let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Resolved!");
  }, 1000);
}).then((value) => console.log(value));
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
// Your code
let promise = new Promise((reject) => {
  reject("PromRejectedise Resolved!");
}).catch((value) => console.log(value));
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
// Your code
let promise = new Promise((reject) => {
  reject("PromRejectedise Resolved!");
})
  .catch((value) => console.log(value))
  .finally(console.log("Promise Settled!"));
```

4. What will be the output of the code below.

```js
console.log("A"); //

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log("B"), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log("C"));

console.log("D");
//A
//D
//C
//D
```

First 'A' will be logged as it has been called first and it is a JS function.
Then 'D' will be logged, though it has been called last in the code but since it is another JS function after 'A' is logged.
Then 'C' will be logged as Promises are stored in the microtask queues whereas setTimeouts are WEB APIs and they are stored in the callback queues and when they are moved from their queues to the call stack, the event loop gives priority to the microtask queue over callback queues. So after 'C' is logged then at last 'B' will be logged

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
// Your code
function wait(time) {
  return new Promise((resolved) => {
    setTimeout(() => {}, time);
  });
}
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
// Your code
let promise = new Promise((resolve) => {
  resolve(21);
})
  .then((value) => {
    return value + 10;
  })
  .then((val) => {
    return val + 100;
  })
  .then((v) => {
    return v > 100;
  })
  .catch((error) => console.log("Value is not greater"));
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
// Your code
let promise = new Promise((res) => {
  res("A");
})
  .then((val) => {
    return val + "B";
  })
  .then((val) => {
    return new Object(val);
  })
  .then((val) => console.log(val));
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
// Your code
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
// Your code
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
// Your code
```
