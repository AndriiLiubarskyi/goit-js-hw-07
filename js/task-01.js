const list = document.querySelector('#categories');
console.log(`В списке ${list.children.length} категории.`);

const itemsEl = document.querySelectorAll('li.item');
itemsEl.forEach(element => {
    console.log(`Категория: ${element.firstElementChild.textContent}, Количество элементов: ${element.querySelectorAll('li').length}`);
});