const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulIngredients = document.getElementById("ingredients");

const allElement = [];
const element = ingredients.map(option => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = option;
  allElement.push(ingredientsEl);
  console.log(allElement);
});
    
ulIngredients.append(...allElement);

