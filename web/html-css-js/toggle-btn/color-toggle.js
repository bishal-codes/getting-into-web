const root = document.querySelector(":root");
const toggleBtn = document.getElementById("toggle-btn");

/**
 * 1. page ko color change garney
 * 2. text ko color change garney
 * 3. icon lai add garxau toggle button ma
 */

toggleBtn.addEventListener("click", () => {
  // bg color change
  // text color change
  updateBgTextColor();
});

function updateBgTextColor() {
  const currentMode = root.classList.contains("dark") ? "light" : "dark";
  root.classList.remove("dark", "light");
  root.classList.add(currentMode);
  localStorage.setItem("mode", currentMode);
  updateToggleButton();
}

function loadBgColor() {
  const colorMode = localStorage.getItem("mode");
  if (colorMode) {
    root.classList.add(colorMode);
  } else {
    root.classList.add("light");
  }
  updateToggleButton();
}

function updateToggleButton() {
  if (root.classList.contains("dark")) {
    toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    toggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
  }
}
