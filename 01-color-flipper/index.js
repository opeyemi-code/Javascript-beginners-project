const colors = ["Maroon", "Red", "Purple", "Lime", "Teal", "Aqua"];

const span = document.querySelector("span");
const bgColor = document.getElementById("background__color");
const btn = document.getElementById("btn");

btn.addEventListener("click", setBgColor);

function generateRandomColor() {
  const colorsLength = colors.length;
  let randomNumber = Math.floor(Math.random() * colorsLength);
  return colors[randomNumber];
}

function setBgColor(e) {
  const randomColor = generateRandomColor();

  bgColor.style.backgroundColor = randomColor;
  span.textContent = randomColor;
  e.preventDefault();
}

export { span, bgColor, btn, setBgColor };
