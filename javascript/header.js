const header = document.querySelector("header");

window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop - document.body.scrollTop <= 50) {
                header.classList.remove("scrolled");
        } else {
                header.classList.add("scrolled");
        }
});

let lastTop = 0;
window.onscroll = function () {
        let top = document.body.scrollTop + document.documentElement.scrollTop;
        if (top > lastTop) {
                header.classList.add("scrolled_down");
        } else {
                header.classList.remove("scrolled_down");
        }
        lastTop = top;
};