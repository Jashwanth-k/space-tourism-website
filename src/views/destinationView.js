import * as model from '../../model.js';
import { handleData } from '../../controller.js';
const jsonData = model.state.data.destinations;

const _parentElement = document.querySelector('.sub-nav');
const image = document.querySelector('.image');
const heading = document.querySelector('.heading-2');
const bodyText = document.querySelector('.body-text');
const distance = document.querySelector('.distance');
const time = document.querySelector('.travel');

let changeData;
let currSubNavElement = document.querySelector('.sub-nav-links');

const updateData = function (changeData) {
  image.src = '../.' + changeData.images.png;
  heading.textContent = changeData.name;
  bodyText.textContent = changeData.description;
  distance.textContent = changeData.distance;
  time.textContent = changeData.travel;
};

_parentElement.addEventListener('click', function (e) {
  const controllerData = handleData(
    _parentElement,
    currSubNavElement,
    jsonData,
    e
  );

  if (!controllerData) return;
  [changeData, currSubNavElement] = controllerData;
  updateData(changeData);
});
