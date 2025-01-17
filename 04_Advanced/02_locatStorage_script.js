const displayUsername = document.getElementById("display-username");
const inputUsername = document.getElementById("input-username");
const button = document.getElementById("submit-button");

button.addEventListener("click", () => {
  const inputValue = inputUsername.value;
  localStorage.setItem("name", inputValue);
  displayUsername.innerHTML = inputValue;
  //   location.reload(); // reload at the location
});

/* 
1. using window because we need to fire the entire page including all the dependent resources
1. Use window.addEventListener("load") for actions requiring all resources
1. Use document.addEventListener("DOMContentLoaded") for actions needing only the DOM
*/

window.addEventListener("load", () => {
  const localValue = localStorage.getItem("name");
  displayUsername.innerHTML = localValue;
});
