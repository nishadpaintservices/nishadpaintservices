const form = document.getElementById("quoteForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  successMessage.style.display = "block";
  form.reset();
});