export function call() {
  const divcallBar = document.querySelector(".container_call"),
        sidecallBtns = document.querySelectorAll(".nav-icon__check"),
        overlaycall_right = document.querySelector(".overlay_right_call"),
        tgsidecallButton = document.querySelector('.container_call__close');

    sidecallBtns.forEach((sidecallBtn) => {
      sidecallBtn.addEventListener("click", () => {
          divcallBar.classList.toggle("open");
      });
    });

    overlaycall_right.addEventListener("click", () => {
      divcallBar.classList.remove("open");
    });

    tgsidecallButton.addEventListener("click", () => {
      divcallBar.classList.remove("open");
    });
  }
