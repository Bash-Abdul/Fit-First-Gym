 
 
 
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