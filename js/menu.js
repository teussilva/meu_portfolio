const menuNavLink = document.querySelector('.links-menu')
const menuBtn = document.querySelector('[data-js="icon-bars"]').parentElement

function activeMenuToClick(btn, menu){
    btn.addEventListener('click', (e) =>{
       if(e.target){
         menu.classList.toggle('active')
         if(menu.classList.contains('active')){
            const btnClose = menu.children[0]
            removeMenu(btnClose, menu)
         }
       }
    })
}

function removeMenu(btn, menu){
    const allLinkMenu = menu.children[1].querySelectorAll('a')
    allLinkMenu.forEach((a) =>{
        a.addEventListener('click', (e) =>{
           e.target ? menu.classList.remove('active') : true
        })
    })
    btn.addEventListener('click', (e) =>{
      menu.classList.remove('active')
     })
}

activeMenuToClick(menuBtn, menuNavLink)
