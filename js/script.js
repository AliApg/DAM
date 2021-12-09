const btn = document.querySelector("#nav-icon4");
const sideNav = document.querySelector(".main-nav");

btn.addEventListener("click", () => {
    btn.classList.toggle('open');
    sideNav.classList.toggle('clicked');
});

const navBar = document.querySelector(".container");
const start = document.querySelector(".start");

const up = document.querySelector("#up")
const upRef = document.querySelector(".up-ref")

const lan = document.querySelector("#language")
const lanRef = document.querySelector("#lan")

up.addEventListener("click", () => {
    upRef.click();
})

lan.addEventListener("click", () => {
    lanRef.click();
})

const openerPicOptions = {
    rootMargin: "-140px 0px 0px 0px"
    // threshold: .1
};

const openerPicObserver = new IntersectionObserver( function (entries, openerPicObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navBar.classList.add("scrolled");
            up.classList.add("scrolled");
        } else {
            navBar.classList.remove("scrolled");
            up.classList.remove("scrolled");
        }
    })
}, openerPicOptions);

openerPicObserver.observe(start);

const fader = document.querySelectorAll(".information")
const slider = document.querySelectorAll(".sub-description");

const faderOptions = {
    rootMargin: "0px 0px -15% 0px"
};

const appearOnScroll = new IntersectionObserver( function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("arrives");
            appearOnScroll.observe(entry.target)
        }
    })
}, faderOptions);

fader.forEach(fade => {
    appearOnScroll.observe(fade)

});

slider.forEach(slide => {
    appearOnScroll.observe(slide)
})
