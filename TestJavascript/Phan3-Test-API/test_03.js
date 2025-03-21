const dataList = document.getElementById("data-list");
const buttons = document.querySelectorAll("button");
async function fetchData(url, button) {
  const response = await fetch(url);
  const data = await response.json();
  dataList.innerHTML = data
    .slice(0, 5)
    .map((item) => `<li>${item.title}</li>`)
    .join("");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}
document.getElementById("posts").addEventListener("click", function () {
  fetchData("https://jsonplaceholder.typicode.com/posts", this);
});
document.getElementById("albums").addEventListener("click", function () {
  fetchData("https://jsonplaceholder.typicode.com/albums", this);
});
document.getElementById("photos").addEventListener("click", function () {
  fetchData("https://jsonplaceholder.typicode.com/photos", this);
});
document.getElementById("posts").click();
