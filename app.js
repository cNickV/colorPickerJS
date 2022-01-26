const colorInput = document.getElementById("colorInput");
const btnWachingButton = document.getElementById("btnWachingButton");
const paragraphColor = document.getElementById("paragraphColor");
const cardColorLabel = document.getElementById("cardColorLabel");

btnWachingButton.addEventListener("click", () => {
  paragraphColor.textContent = colorInput.value;
  cardColorLabel.style.backgroundColor = colorInput.value;
});
