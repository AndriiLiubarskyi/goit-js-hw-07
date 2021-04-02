const list = categories.children;
console.log(`В списке ${list.length} категории.`);

for (let i = 0; i < list.length; i += 1) {
    const itemList = list[i];

    const head = itemList.querySelector('h2');
    console.log(`Категория: ${head.textContent}`);

    const headLi = itemList.querySelector('ul').children;
    console.log(`Количество элементов: ${headLi.length}`);
};
