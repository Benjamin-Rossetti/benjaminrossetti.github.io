document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();          
    popup.classList.add("show"); 
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("show"); location.reload();
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.remove("show");
  });
});