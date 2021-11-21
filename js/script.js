const btn = document.querySelector("#nav-icon4");
const sideNav = document.querySelector(".main-nav");

btn.addEventListener("click", () => {
    btn.classList.toggle('open');
    sideNav.classList.toggle('clicked');
});

const navBar = document.querySelector(".container");
const openerPic = document.querySelector(".opener-pic");

const openerPicOptions = {
    rootMargin: "-70px 0px 0px 0px"
};

const openerPicObserver = new IntersectionObserver( function (entries, openerPicObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navBar.classList.add("scrolled");
        } else {
            navBar.classList.remove("scrolled");
        }
    })
}, openerPicOptions);

openerPicObserver.observe(openerPic);

const slider = document.querySelectorAll(".information")
const fader = document.querySelectorAll(".sub-description");
const faderOptions = {

    rootMargin: "0px 0px -25px 0px"
};

const appearOnScroll = new IntersectionObserver( function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("arrives");
        } else if (!entry.isIntersecting) {
            entry.target.classList.remove("arrives");
        }
    })
}, faderOptions);

fader.forEach(fade => {
    appearOnScroll.observe(fade)

});

slider.forEach(slide => {
    appearOnScroll.observe(slide)
})
