import * as model from '../../model.js';
import { handleData } from '../../controller.js';
const jsonData = model.state.data.crew;

const _parentElement = document.querySelector('.slider');
const image = document.querySelector('.image');
const role = document.querySelector('.heading-4');
const name = document.querySelector('.heading-3');
const bodyText = document.querySelector('.body-text');

let changeData;
let currComponent = document.querySelector('.slider-component');

const updateData = function (changeData) {
  image.src = '../.' + changeData.images.png;
  role.textContent = changeData.role;
  name.textContent = changeData.name;
  bodyText.textContent = changeData.bio;
};

_parentElement.addEventListener('click', function (e) {
  const controllerData = handleData(_parentElement, currComponent, jsonData, e);

  if (!controllerData) return;
  [changeData, currComponent] = controllerData;
  updateData(changeData);
});
