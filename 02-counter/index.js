const p = document.querySelector(".count");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => btn.addEventListener("click", counter));

function counter(e) {
  var count = p.textContent;

  if (e.currentTarget.classList.contains("increase__btn")) {
    ++count;
  } else if (e.currentTarget.classList.contains("decrease__btn")) {
    --count;
  } else {
    count = 0;
  }

  p.textContent = count;
  localStorage.setItem("key", count);

  if (Number(count) > 0) {
    p.style.color = "green";
  } else if (Number(count) < 0) {
    p.style.color = "red";
  } else {
    p.style.color = "#1d3557";
  }
  e.preventDefault();
}

p.textContent = localStorage.getItem("key");
