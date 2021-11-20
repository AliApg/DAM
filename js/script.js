const btn = document.querySelector("#nav-icon4")
const side_nav = document.querySelector(".main-nav")

btn.addEventListener("click", () => {
    btn.classList.toggle('open');
    side_nav.classList.toggle('clicked');
});