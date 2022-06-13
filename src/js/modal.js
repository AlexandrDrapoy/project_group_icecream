(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn1: document.querySelector('[data-modal-open-mob]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal_1);

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
  function toggleModal_1() {
    document.body.classList.toggle('modal-open-mob');
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();
('onclick');
