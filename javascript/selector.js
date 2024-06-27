let html_button = document.querySelector("#html_button");
let css_button = document.querySelector("#css_button");
let javascript_button = document.querySelector("#javascript_button");

let html_grid = document.querySelector("#html_grid");
let css_grid = document.querySelector("#css_grid");
let javascript_grid = document.querySelector("#javascript_grid");

html_button.classList.add("current");
html_grid.style.display = "flex";

html_button.onclick = () => {
        html_button.classList.add("current");
        css_button.classList.remove("current");
        javascript_button.classList.remove("current");

        html_grid.style.display = "flex";
        css_grid.style.display = "none";
        javascript_grid.style.display = "none";
};

css_button.onclick = () => {
        html_button.classList.remove("current");
        css_button.classList.add("current");
        javascript_button.classList.remove("current");

        html_grid.style.display = "none";
        css_grid.style.display = "flex";
        javascript_grid.style.display = "none";
};

javascript_button.onclick = () => {
        html_button.classList.remove("current");
        css_button.classList.remove("current");
        javascript_button.classList.add("current");

        html_grid.style.display = "none";
        css_grid.style.display = "none";
        javascript_grid.style.display = "flex";
};