// Write your code here!
/*fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayPosts(data);
  })
  .catch((error) => console.error("Error fetching data", error));
*/
async function fetchAndDisplay() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();
    console.log(data);
    displayPosts(data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

fetchAndDisplay();

function displayPosts(posts) {
  posts.forEach((data) => {
    const post = document.createElement("li");
    const title = document.createElement("h1");
    const list = document.getElementById("post-list");
    title.textContent = data.title;
    const body = document.createElement("p");
    body.textContent = data.body;
    post.append(title);
    post.append(body);
    list.appendChild(post);
  });
}
