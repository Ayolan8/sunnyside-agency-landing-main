const toggleSideMenu = document.getElementById("open-close-side-menu");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

const closeSideMenu = () => {
    for (let i = 0; i < navLink.length; i++){
        navLink[i].addEventListener("click", () => {
            nav.classList.toggle('flex');
        });
    }
};

toggleSideMenu.addEventListener("click", () => {
    nav.classList.toggle('flex');
});

closeSideMenu();