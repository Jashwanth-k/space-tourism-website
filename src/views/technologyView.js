import * as model from '../../model.js';
import { handleData } from '../../controller.js';
const jsonData = model.state.data.technology;

const _parentElement = document.querySelector('.page-btns');
const image = document.querySelector('.image');
const heading = document.querySelector('.heading-3');
const bodyText = document.querySelector('.body-text');

let changeData;
let currBtn = document.querySelector('.page-btn');

const updateData = function (changeData) {
  image.src = '../.' + changeData.images.portrait;
  heading.textContent = changeData.name;
  bodyText.textContent = changeData.description;
};

_parentElement.addEventListener('click', function (e) {
  const controllerData = handleData(_parentElement, currBtn, jsonData, e);

  if (!controllerData) return;
  [changeData, currBtn] = controllerData;
  updateData(changeData);
});
