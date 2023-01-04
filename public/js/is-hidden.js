(() => {
  const ref = {
    // open preview
    open: document.querySelector("[data-preview-open]"),
    // to add / remove class 'is-hidden'
    toggle: document.querySelector("[data-preview]"),
  };

  // click and open preview
  ref.open.addEventListener("click", toggleModal);
  // clock and close preview

  // function preview
  function toggleModal() {
    ref.toggle.classList.toggle("is-hidden");
  }
})();

