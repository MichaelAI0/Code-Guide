document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.createElement("button");
  themeToggleButton.textContent = "Toggle Theme";
  document.body.insertBefore(themeToggleButton, document.body.firstChild);

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
});
