const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

let showNav = false;
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
   if(!showMenu && !showNav){
     menuBtn.classList.add('close');
     nav.classList.add('open');

    showMenu = true;
    showNav = true;
   }else{
     menuBtn.classList.remove('close');
     nav.classList.remove('open');

     showMenu = false;
     showNav = false;
   } 
}