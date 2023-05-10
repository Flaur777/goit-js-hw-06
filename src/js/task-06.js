const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
    const inputLength = input.value.length;
    const dataLength = input.getAttribute('data-length');
    if (inputLength === Number(dataLength)) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
    else {
        input.classList.remove('valid')
        input.classList.add('invalid')   
  }  
})