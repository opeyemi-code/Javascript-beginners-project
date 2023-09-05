const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const span = document.querySelector("span");
const bgColor = document.getElementById("background__color");
const btn = document.getElementById("btn");

btn.addEventListener("click", setBgColor);

function generateHexCode() {
  let str = "#";
  for (let i = 0; i < 6; i++) {
    str += arr[Math.floor(Math.random() * arr.length)];
  }
  return str;
}

function setBgColor(e) {
  const colorHexCode = generateHexCode();

  bgColor.style.backgroundColor = colorHexCode;
  span.innerText = colorHexCode;
}
