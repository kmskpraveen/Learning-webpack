export function writeToScreen() {
    document.write('Hello world from webpack!!!')
}

export function changeH1(text) {
    document.querySelector('h1').innerText = text + '\nThis is cool!'
}

// if(module && module.hot) module.hot.accept()