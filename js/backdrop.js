(() => {
    const refs = {
      openBackdropBtn: document.querySelector(".section-two-btn"),
      closeBackdropBtn: document.querySelector(".mob-modal-close-btn"),
      backdrop : document.querySelector(".mob-backdrop"),
    };
  
    refs.openBackdropBtn.addEventListener("click", toggleBackdrop);
    refs.closeBackdropBtn.addEventListener("click", toggleBackdrop);
  
    function toggleBackdrop() {
      refs.backdrop.classList.toggle("is-hidden");
    }
  })();