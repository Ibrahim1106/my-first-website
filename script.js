
const button = document.getElementById("welcomeButton");
const message = document.getElementById("welcomeMessage");

button.addEventListener("click", function () {
  message.textContent = "مرحبًا بك! لقد عملت JavaScript بنجاح.";
});
