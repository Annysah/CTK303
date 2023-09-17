const canvas = document.querySelector("#pixelCanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const sizeSlider = document.getElementById("sizeSlider");

let drawing = false;

canvas.addEventListener("mousedown", () => {
  drawing = true;
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", drawPixel);

function drawPixel(e) {
  if (!drawing) return;

  const x = e.offsetX;
  const y = e.offsetY;

  ctx.fillStyle = colorPicker.value;
  const size = parseInt(sizeSlider.value);
  ctx.fillRect(x, y, size, size);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
