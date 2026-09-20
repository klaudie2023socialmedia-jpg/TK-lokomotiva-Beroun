const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".navbar ul");

if (hamburger && menu) {

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Po kliknutí na odkaz menu zavřít
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            menu.classList.remove("active");
        });
    });

}
