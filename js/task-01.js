const categories = document.querySelector('#categories');
const categoriesItems = categories.querySelectorAll('.item')

console.log(`Number of categories: ${categoriesItems.length}`); 

const allCategories = document.querySelectorAll("h2");
allCategories.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});