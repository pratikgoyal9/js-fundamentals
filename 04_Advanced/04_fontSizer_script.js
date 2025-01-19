const userName = document.getElementById("user-name");
const size10px = document.getElementById("size-10px");
const size30px = document.getElementById("size-30px");
const size50px = document.getElementById("size-50px");
const size70px = document.getElementById("size-70px");

function changeTextSize(num) {
  function innerFn() {
    userName.style.fontSize = `${num}px`;
  }
  return innerFn;
}

const size10 = changeTextSize(10);
const size30 = changeTextSize(30);
const size50 = changeTextSize(50);

size10px.addEventListener("click", size10);
size30px.addEventListener("click", size30);
size50px.addEventListener("click", size50);

size70px.addEventListener("click", changeTextSize(70));
