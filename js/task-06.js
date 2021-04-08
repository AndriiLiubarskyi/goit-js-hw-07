const inputText =
    document.querySelector('#validation-input');

inputText.addEventListener('blur', InputChangeColor);

function InputChangeColor(event) {
    const eventText = event.currentTarget.value;
    if (eventText.length === Number(inputText.getAttribute('data-length')))
    {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid')
    }
    else {
        inputText.classList.toggle('valid');
        inputText.classList.add('invalid');
    };
};
