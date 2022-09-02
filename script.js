
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);




let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modelo');
let modalImg = document.querySelector('#modelo_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener('click', function () {

    srcVal = imagens[i].getAttribute('src');
    modalImg.setAttribute('src', srcVal);
    modal.classList.toggle('modal_active');
  });

}


btClose.addEventListener('click', function () {
  modal.classList.toggle('modal_active');
});


function cookies(functions) {
  const container = document.querySelector('.cookies-primario');
  const save = document.querySelector('.cookies-save');
  if (!container || !save) return null;

  const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
  if (localPref) activateFunctions(localPref);

  function getFormPref() {
    return [...document.querySelectorAll('[data-function]')]
      .filter((el) => el.checked)
      .map((el) => el.getAttribute('data-function'));
  }

  function activateFunctions(pref) {
    pref.forEach((f) => functions[f]());
    container.style.display = 'none';
    window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
  }

  function handleSave() {
    const pref = getFormPref();
    activateFunctions(pref);
  }

  save.addEventListener('click', handleSave);
}

function marketing() {
  console.log('Função de marketing');
}

function analytics() {
  console.log('Função de analytics');
}

cookies({
  marketing,
  analytics,
});


