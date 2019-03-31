const nav = document.querySelector("nav");
const navSpans = [document.querySelector("div.burger span"), document.querySelector("div.close span.close")];
const headerButton = document.querySelector("button.learnMore");
const sectionAbout = document.querySelector("section.about");
const h2About = document.querySelector("section.about h2.about");
const aboutElements = [...document.querySelectorAll("div.about *"), document.querySelector("section.about img.arrow")];

const navLis = [{
    li: document.querySelector("nav ul li:nth-of-type(1)"),
    section: document.querySelector("header")
}, {
    li: document.querySelector("nav ul li:nth-of-type(2)"),
    section: document.querySelector("section.about")
}, {
    li: document.querySelector("button.learnMore"),
    section: document.querySelector("section.about")
}, {
    li: document.querySelector("nav ul li:nth-of-type(3)"),
    section: document.querySelector("section.products")
}, {
    li: document.querySelector("nav ul li:nth-of-type(4)"),
    section: document.querySelector("section.contact")
}];


navLis.forEach(li => li.li.addEventListener("click", () => {
    $("body,html").animate({
        scrollTop: li.section.offsetTop > 0 && window.innerWidth >= 1024 ? li.section.offsetTop - nav.offsetHeight : li.section.offsetTop
    }, 500);
    nav.classList.remove("active");
}));

navSpans.forEach(span => span.addEventListener("click", () => {
    nav.classList.toggle("active");
}));


//SCROLL FUNTCIONS
const showElements = () => {
    if (window.scrollY >= sectionAbout.offsetTop / 1.2 && !h2About.classList.contains("active")) {
        aboutElements.forEach(element => element.classList.add("active"));
    }
}

window.addEventListener("scroll", () => {
    window.scrollY > 0 ? nav.classList.add("activeScroll") : nav.classList.remove("activeScroll");
    showElements();
});


//BUTTONS COLOR FUNCTION
headerButton.addEventListener("mousedown", () => {
    headerButton.classList.add("activePurple");
});

headerButton.addEventListener("mouseup", () => {
    headerButton.classList.remove("activePurple");
});