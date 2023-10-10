window.addEventListener('scroll', () => {
document.querySelector('nav').classList.toggle('window-scrolled',window.scrollY >0);    
}

)



const nav =document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () =>{
    nav.style.display ='flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
}

const closeNav = () =>{
    nav.style.display ='none'
    openNavBtn.style.display='inline-block'
    closeNavBtn.style.display='none'
}

openNavBtn.addEventListener('click',openNav);
closeNavBtn.addEventListener('click',closeNav)

nav.querySelectorAll('li a').forEach(navLink =>{
    navLink.addEventListener('click',closeNav);
})
