const openPopUp = document.getElementById('open_pop_up');
const openPopUpFr = document.getElementById('open_pop_up_fr');
const closePopUp = document.getElementById('pop_up_close');
const closePopUpFr = document.getElementById('pop_up_close_fr');
const popUp = document.getElementById('pop_up');
const popUpFr = document.getElementById('pop_up_fr');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
});

openPopUpFr.addEventListener('click', function (e) {
  e.preventDefault();
  popUpFr.classList.add('active');
});

closePopUpFr.addEventListener('click', () => {
  popUpFr.classList.remove('active');
});
