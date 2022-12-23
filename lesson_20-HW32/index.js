const p = new Promise(() => {});
console.warn(p);

const todoPromise = fetch("https://jsonplaceholder.typicode.com/posts/");
console.warn({ todoPromise });

const responsePromise = todoPromise.then((response) => {
  console.warn({ response });
  return response.json();
});

let f = responsePromise.then((json) => {
  console.warn({ json });
});
