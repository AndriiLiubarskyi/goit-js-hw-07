const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};


refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value != "") {
        refs.output.textContent = `${event.currentTarget.value}`;
    } else { refs.output.textContent = `незнакомец` };
    console.log(event.currentTarget.value);
};
