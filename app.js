const uploadInput = document.getElementById("uploadInput");
const resetBtn = document.getElementById("resetBtn");
const canvas = document.getElementById("previewCanvas");
const plateText = document.getElementById("plateText");
const confidence = document.getElementById("confidence");
const objectCount = document.getElementById("objectCount");
const processTime = document.getElementById("processTime");

const ctx = canvas.getContext("2d");
const demoImage = new Image();
let lastObjectUrl = null;

const placeholder = {
  title: "Drop a vehicle image here",
  subtitle: "Upload to run the AI demo",
};

const renderPlaceholder = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#eef2ff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#41558f";
  ctx.font = "600 22px Inter, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(placeholder.title, canvas.width / 2, canvas.height / 2 - 10);
  ctx.font = "400 16px Inter, sans-serif";
  ctx.fillText(placeholder.subtitle, canvas.width / 2, canvas.height / 2 + 20);
};

const drawDetection = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const { width, height } = canvas;

  const scale = Math.min(width / demoImage.width, height / demoImage.height);
  const drawWidth = demoImage.width * scale;
  const drawHeight = demoImage.height * scale;
  const offsetX = (width - drawWidth) / 2;
  const offsetY = (height - drawHeight) / 2;

  ctx.drawImage(demoImage, offsetX, offsetY, drawWidth, drawHeight);

  const boxWidth = drawWidth * 0.42;
  const boxHeight = drawHeight * 0.13;
  const boxX = offsetX + (drawWidth - boxWidth) / 2;
  const boxY = offsetY + drawHeight * 0.72;

  ctx.strokeStyle = "#1b4dff";
  ctx.lineWidth = 4;
  ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

  ctx.fillStyle = "rgba(27, 77, 255, 0.18)";
  ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

  ctx.fillStyle = "#0f1d40";
  ctx.font = "600 16px Inter, sans-serif";
  ctx.fillText("License Plate", boxX, boxY - 12);
};

const updateOutputs = ({ plate, score, objects, time }) => {
  plateText.textContent = plate;
  confidence.textContent = score;
  objectCount.textContent = objects;
  processTime.textContent = time;
};

const resetDemo = () => {
  renderPlaceholder();
  updateOutputs({ plate: "Upload an image to begin", score: "--", objects: "0", time: "--" });
  uploadInput.value = "";
  if (lastObjectUrl) {
    URL.revokeObjectURL(lastObjectUrl);
    lastObjectUrl = null;
  }
};

uploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  if (lastObjectUrl) {
    URL.revokeObjectURL(lastObjectUrl);
  }

  lastObjectUrl = URL.createObjectURL(file);
  demoImage.onload = () => {
    drawDetection();
    const simulatedPlate = "ABC-1234";
    const simulatedScore = `${(Math.random() * 0.08 + 0.9).toFixed(2)}%`;
    const simulatedTime = `${(Math.random() * 6 + 2).toFixed(1)} ms`;

    updateOutputs({
      plate: simulatedPlate,
      score: simulatedScore,
      objects: "1",
      time: simulatedTime,
    });
  };
  demoImage.src = lastObjectUrl;
});

resetBtn.addEventListener("click", resetDemo);

renderPlaceholder();
