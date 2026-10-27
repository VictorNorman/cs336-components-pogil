let likes = 0;
const button = document.getElementById("like-1");

button.addEventListener("click", function () {
  likes++;
  button.textContent = "Like (" + likes + ")";
});
