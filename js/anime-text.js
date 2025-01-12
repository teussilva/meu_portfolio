const animeText = document.querySelector('[data-js="anime-text"]')

const animeTextHeader = text => {
    let arrLetters = text.textContent.split('')
    text.textContent = ''
    arrLetters.forEach((letter, i) =>{

        if(letter && i >= 0 && i <= 26){
           setTimeout(() => {
            console.log(text.textContent += letter)
            console.log(i)
           }, 1500 * i)
        }
    })
}

animeTextHeader(animeText)