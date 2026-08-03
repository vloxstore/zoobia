const navBtn = document.querySelector(".nav-btn");
const navScreen = document.querySelector(".nav-screen");
const body = document.body;

navBtn.addEventListener("click", function() {
     navBtn.classList.toggle("cross");
     navScreen.classList.toggle("show");
     body.classList.toggle("off-scroll");
})

