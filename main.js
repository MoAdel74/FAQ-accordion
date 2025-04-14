let imgs = document.querySelectorAll("img");
let text = document.querySelectorAll("span");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    if (img.src.includes("assets/images/icon-minus.svg")) {
      img.src = "assets/images/icon-plus.svg";
      img.parentElement.nextElementSibling.style.display = "none";
    } else if (img.src.includes("assets/images/icon-plus.svg")) {
      img.src = "assets/images/icon-minus.svg";
      img.parentElement.nextElementSibling.style.display = "block";
    }
  });
});
