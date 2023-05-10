const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((element) => {
  const li = document.createElement('li');
  li.textContent = element;
  li.classList.add('item');
  document.querySelector('#ingredients').appendChild(li)
})