// get values when loading
window.onload = () => {
  getValues();
};

// fill input fields
const getValues = () => {
  const inputs = document.querySelectorAll("input");
  const inputNumber = document.querySelectorAll('input[type="number"]');
  const inputRadio = document.querySelectorAll("input[type=radio]");

  //text fields
  inputs.forEach((input) => {
    const item = localStorage.getItem(input.name);
    if (item) input.value = item;
  });

  // number fields
  inputNumber.forEach((input) => {
    const item = localStorage.getItem(input.name);
    if (item) input.value = item;
  });

  // radio buttons
  inputRadio.forEach((input) => {
    const item = localStorage.getItem(input.name);
    if (item) input.value = item;
    document.getElementById(item).checked = true;
  });

  localStorage.clear();
};

// save to localstorage
window.onbeforeunload = function () {
  const inputs = document.querySelectorAll('input[type="text"]');
  const inputNumber = document.querySelectorAll('input[type="number"]');
  const inputRadio = document.querySelectorAll("input[type=radio]:checked");

  // save radio buttons
  inputRadio.forEach((input) => {
    localStorage.setItem(input.name, input.id);
  });

  // save text fields
  inputs.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });

  // save number fields
  inputNumber.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });
};