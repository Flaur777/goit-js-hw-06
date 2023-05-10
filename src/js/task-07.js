const fontSizeRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

fontSizeRange.addEventListener('input', (event) => {
    const fontSize = `${fontSizeRange.value}px`;
    text.style.fontSize = fontSize;
})

