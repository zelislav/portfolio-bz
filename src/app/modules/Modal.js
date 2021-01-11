class Modal {
  constructor () {
    this.openModalButton = document.querySelectorAll('.open-modal');
    this.modal = document.querySelector('.modal');
    this.closeModalButton = document.querySelector('.modal__close');
    this.events();
  }

  events () {
    for (let i = 0; i < this.openModalButton.length; i++) {
      this.openModalButton[i].addEventListener('click', this.openModal.bind(this));
    }

    this.closeModalButton.addEventListener('click', this.closeModal.bind(this));

    document.addEventListener('keyup', this.keyPressHandler.bind(this));
  }

  keyPressHandler (e) {
    if (e.key === 'Escape') {
      this.closeModal();
    }
  }

  openModal (e) {
    e.preventDefault();
    this.modal.classList.add('modal--is-visible');
    return false
  }

  closeModal () {
    this.modal.classList.remove('modal--is-visible');
  }
}

export default Modal;