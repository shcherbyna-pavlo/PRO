const idPost = document.getElementById("idPost");
const searchPost = document.getElementById("searchPost");
const post = document.getElementById("post");
const comments = document.getElementById("comments");
const searchComments = document.getElementById("searchComments");
const postList = document.getElementsByClassName("postList");
const commentList = document.getElementsByClassName("commentList");

function validation () {
  if (idPost.value > 0 && idPost.value < 101) {
    getPost()
  } else {
    removeElem()
    post.insertAdjacentHTML("afterbegin",`<h1 class ="postList">Введіть число від 1 до 100</h1>`);
  }
}

function getPost() {
  
  const getPosts = fetch(`https://jsonplaceholder.typicode.com/posts/${idPost.value}`);

  getPosts.then((response) => {
      return response.json();
    }).then((json) => {
      const { title, body } = json;

      post.insertAdjacentHTML("afterbegin",`<h1 class ="postList">${title}</h1><p class ="postList">${body}</p>`);
    }).catch((err) => {
      searchComments.style.display = "none";
      post.insertAdjacentHTML("afterbegin",`<h1 class ="postList">${err}</h1>`)
    });
  removeElem();
  searchComments.style.display = "block";
}

searchPost.addEventListener("click", validation);

function getComment() {
  const getComments = fetch(`https://jsonplaceholder.1typicode.com/comments?postId=${idPost.value}`);

  getComments
    .catch((error) => {
      comments.insertAdjacentHTML("beforeend",`<h1 class ="commentList">${error}</h1>`);
    }).then((response) => {
      return response.json();
    }).then((json) => {
      [...json].forEach((el) => {
        const { name, body, email } = el;
        comments.insertAdjacentHTML("beforeend",`<h1 class ="commentList">${name}</h1><p class ="commentList">${body}</p><p class ="commentList">${email}</p>`
        );
      });
    });
}

searchComments.addEventListener("click", getComment);

function removeElem() {
  [...postList].forEach((el) => {
    el.remove();
  });

  [...commentList].forEach((el) => {
    el.remove();
  });
}
