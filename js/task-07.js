const inputValue = document.querySelector('#font-size-control');
    
inputValue.addEventListener('input', showInput);

function showInput(event) {
    const sliderValue = event.currentTarget.value;
    document.getElementById("text").style.fontSize = sliderValue + 'px';
};
