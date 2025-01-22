export function comment() {
    const divBar = document.querySelector(".container"),
          sideBtns = document.querySelectorAll(".nav-icon__repair"),
          overlay_right = document.querySelector(".overlay_right"),
          tgsideButton = document.querySelector('.container_close');

      sideBtns.forEach((sideBtn) => {
        sideBtn.addEventListener("click", () => {
            divBar.classList.toggle("open");
        });
      });

      overlay_right.addEventListener("click", () => {
        divBar.classList.remove("open");
      });

      tgsideButton.addEventListener("click", () => {
        divBar.classList.remove("open");
      });
    }
