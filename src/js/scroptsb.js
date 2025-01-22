export function navigation() {
  const navBar = document.querySelector("nav"),
    menuBtns = document.querySelectorAll(".menu-icon"),
    overlay = document.querySelector(".overlay"),
    tgButton = document.querySelector('.nav-header__burger');

    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", () => {
          navBar.classList.toggle("open");
      });
    });

    overlay.addEventListener("click", () => {
      navBar.classList.remove("open");
    });

    tgButton.addEventListener("click", () => {
      navBar.classList.remove("open");
    });
  }


