let box = document.querySelector('div'),
    input = document.querySelector('input');

input.addEventListener('input', () => {
    let value = input.value;
    box.style.borderRadius = value;
    box.style.background = value;
});