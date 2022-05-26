// import { fetchData } from './model';
const btn = document.querySelector('.btn');
const nav = document.querySelector('.navcontainer');
const _parentElement = document.querySelector('.nav');

const contrlNav = function () {
  _parentElement.addEventListener('click', function (e) {
    e.preventDefault();
    const ele = e.target.closest('.navlink');
    if (!ele) return;

    const link = ele.getAttribute('href');
    if (link == '#') return;
    window.location.href = link;
  });
};

export const controlBtn = function () {
  btn.addEventListener('click', function (e) {
    if (btn.classList.contains('open')) {
      btn.classList.remove('open');
      btn.classList.add('close');
      nav.classList.remove('hidden');
    } else {
      btn.classList.remove('close');
      btn.classList.add('open');
      nav.classList.add('hidden');
    }
  });
};

const init = function () {
  contrlNav();
  controlBtn();
};
init();

// main function to handle all data changes in webpages
export const handleData = function (_parentElement, currElement, jsonData, e) {
  e.preventDefault();
  const ele = e.target.closest('.' + currElement.className.split(' ')[0]);
  if (!ele) return;
  if (currElement.dataset.name === ele.dataset.name) return false;

  // toggle active class
  currElement.classList.remove('active');
  currElement = ele;
  currElement.classList.add('active');

  // extract obj from json
  const changeData = jsonData.find(el => el.name === currElement.dataset.name);
  return [changeData, currElement];
};
