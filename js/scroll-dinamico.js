const header = document.querySelector('header')
const allSection = document.querySelectorAll('section')


let animateScrollIntoDOM = (section, p) =>{
    section.forEach((sec) =>{
      const position = p
      const topElement = sec.offsetTop + 10
      const bottomElement = topElement + sec.clientHeight
      if(position >= topElement -50  && position <= bottomElement -50 && sec.classList.contains('anime-section')){
        sec.classList.add('active')
        return
       }
       sec.classList.remove('active')
  })
}

let init = () =>{
    window.addEventListener('scroll', () =>{
        let position = window.scrollY
        if(position >= 178){
            header.classList.add('active')
        }else{
            header.classList.remove('active')
        }
        animateScrollIntoDOM(allSection, position)
    })
}
init()