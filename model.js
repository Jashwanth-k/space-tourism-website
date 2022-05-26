export const state = {};

export const fetchData = async function () {
  const data = await fetch('../../data.json');
  const objData = await data.json();
  state.data = objData;
};
await fetchData();
