let container = null;
let prevIndicator = null;

function createContainer() {
  elem = document.createElement('div');

  elem.setAttribute('id', 'carousel');
  document.querySelector('body').append(elem);

  container = document.querySelector('#carousel');
}

function createSlides(n) {
  slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');

  for (i = 0; i < n; i++) {
    slidesItem = document.createElement('li');
    slidesLink = document.createElement('a');

    slidesItem.setAttribute(
      'class',
      i === 0 ? 'slides__item active' : 'slides__item'
    );
    slidesLink.setAttribute('href', '#');
    slidesItem.append(slidesLink);
    slidesContainer.append(slidesItem);
  }

  container.append(slidesContainer);
}

function createIndicators(n) {
  indicatiorsContainer = document.createElement('div');
  indicatiorsContainer.setAttribute('class', 'indicators');

  for (i = 0; i < n; i++) {
    indicatorsItem = document.createElement('span');

    indicatorsItem.setAttribute(
      'class',
      i === 0 ? 'indicators__item active' : 'indicators__item'
    );
    indicatorsItem.dataset.slideTo = `${i}`;
    indicatiorsContainer.append(indicatorsItem);
  }
  container.append(indicatiorsContainer);
}

function createControls() {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');

  for (i = 0; i < 3; i++) {
    controlsItem = document.createElement('div');
    controlsIcon = document.createElement('i');
    const defItemClass = 'controls__item controls__';
    const defIconClass = 'fas fa-';

    switch (i) {
      case 0:
        controlsItem.setAttribute('class', `${defItemClass}prev`);
        controlsIcon.setAttribute('class', `${defIconClass}chevron-left`);
        break;
      case 1:
        controlsItem.setAttribute('class', `${defItemClass}next`);
        controlsIcon.setAttribute('class', `${defIconClass}chevron-right`);
        break;
      case 2:
        controlsItem.setAttribute('class', `${defItemClass}pause`);
        controlsIcon.setAttribute('class', `${defIconClass}play`);
    }
    controlsItem.append(controlsIcon);
    controlsContainer.append(controlsItem);
  }
  container.append(controlsContainer);
}

function createStyle() {
  styleContainer = document.createElement('style');
  let styleCode = `
  html {
    overflow-x: none;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  li {
    list-style: none;
  }
  
  #carousel {
    max-width: 768px;
    width: 100%;
    min-height: 50vh;
    padding: 20px;
    margin: auto;
  }
  
  .slides {
    position: relative;
    height: 200px;
    width: 100%;
  }
  .slides__item {
    opacity: 0;
  }
  .slides__item:nth-of-type(1) {
    background-color: red;
  }
  .slides__item:nth-of-type(2) {
    background-color: green;
  }
  .slides__item:nth-of-type(3) {
    background-color: black;
  }
  .slides__item:nth-of-type(4) {
    background-color: yellow;
  }
  .slides__item:nth-of-type(5) {
    background-color: green;
  }
  .slides__item .active {
    opacity: 1;
  }
  .slides:nth-of-type(1) {
    background-color: red;
  }
  .slides .active {
    opacity: 1;
  }
  
  .controls {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 20px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .controls__item {
    font-size: 1.5rem;
    cursor: pointer;
    color: gray;
  }
  
  .indicators {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-bottom: 20px;
    gap: 20px;
  }
  .indicators__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 20px;
    height: 10px;
    width: 50px;
    border-radius: 5px;
    background-color: gray;
    cursor: pointer;
  }`;

  styleContainer.innerHTML = styleCode;
  container.append(styleContainer);
}

function indicatorsHandler(e) {
  let target = e.target;

  if (target.classList.contains('indicators__item')) {
    target.style.background = 'red';

    if (prevIndicator) prevIndicator.removeAttribute('style');

    prevIndicator = target;
  }
}

function setListeners() {
  const indicatiorsContainer = document.querySelector('div.indicators');

  indicatiorsContainer.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount = 5) {
  createContainer();
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListeners();
}

createCarousel();