(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-menu-btn'),
    closeMenuBtn: document.querySelector('.close-menu-btn'),
    closeMenuBtnMob: document.querySelector('.mob-menu__btn'),
    closeMenuForLink: document.querySelector('.l0'),
    closeMenuForLink1: document.querySelector('.l1'),
    closeMenuForLink2: document.querySelector('.l2'),
    closeMenuForLink3: document.querySelector('.l3'),
    closeMenuForLink4: document.querySelector('.l4'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  refs.closeMenuForLink.addEventListener('click', toggleMenu);
  refs.closeMenuForLink1.addEventListener('click', toggleMenu);
  refs.closeMenuForLink2.addEventListener('click', toggleMenu);
  refs.closeMenuForLink3.addEventListener('click', toggleMenu);
  refs.closeMenuForLink4.addEventListener('click', toggleMenu);
  refs.closeMenuBtnMob.addEventListener('click', toggleMenuMod);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function toggleMenuMod() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
