const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ulIngredients = document.getElementById("ingredients");

const element = ingredients.map(option => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = option;
  return ingredientsEl;
});
    
ulIngredients.append(...element);