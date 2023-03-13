let trainers = document.querySelector('#trainers')
let menu = document.querySelector('.nav_icon');
let nav = document.querySelector('.nav_list')

menu.addEventListener('click', function(){
    nav.classList.toggle('active')
})

window.onscroll = function(){
    if (window.scrollY > 60){
        nav.classList.remove('active')
    }
}
 
 
let signIn = document.querySelector('#SignIn');
let signUp = document.querySelector('#SignUp');
let dont = document.querySelector('.dont');
let sign = document.querySelector('.sign');

dont.addEventListener('click', function(){
    signIn.style.display = "none"
    signUp.style.display = "block"
})
sign.addEventListener('click', function(){
    signIn.style.display = "block"
    signUp.style.display = "none"
})