const inputValue = document.querySelector('#font-size-control');
    
inputValue.addEventListener('change', showInput);

function showInput(event) {
    const sliderValue = event.currentTarget.value;
    document.getElementById("text").style.fontSize = sliderValue + 'px';
    console.log(spanText.textContent);
};
