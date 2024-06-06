//let achat = document.querySelectorAll('h6');
//let ticket = document.getElementsByClassName('ticketAchete');

//declaration of variables
let plus = document.querySelector('.plus');
console.log(plus);
let payment1 = document.querySelector('.payment1');
console.log(payment1)
let payment2 = document.querySelector('.payment2');
console.log(payment2);
let payment3 = document.querySelector('.payment3');
console.log(payment3);
let payment4 = document.querySelector('.payment4');
console.log(payment4);
let title = document.querySelector('h5');
let closeIcon = document.querySelector('.close');
let previousIcon = document.querySelector('.previous');
let btnAcheter = document.querySelector('.acheter');
let caseCochee = document.querySelector('.case');

//Addition of new eventListener on my variable "plus" 
//Declaration and utilisation of new function for displaying gradually sections onclick
closeIcon.addEventListener("click", function () {
    document.location.href = "http://127.0.0.1:5500/titles.html";
})

plus.addEventListener("click", function () {
    console.log('je suis dans la fonction');
    payment1.style.display = 'none';
    payment2.style.display = 'block';
});

btnAcheter.addEventListener("click", function () {
    payment2.style.display = 'none';
    payment3.style.display = 'block';
    payment4.style.display = 'none';
    title.textContent = 'Paiement';
    closeIcon.style.display = 'none';
    previousIcon.style.display = 'block';
})
previousIcon.addEventListener("click", function () {
    payment1.style.display = 'none';
    payment2.style.display = 'block';
    payment3.style.display = 'none';
    payment4.style.display = 'none';
    previousIcon.style.display = 'none';
    closeIcon.style.display = 'block';
})
caseCochee.addEventListener("click", function () {
    payment3.style.display = 'none';
    payment4.style.display = 'block';
    title.textContent = 'Paiement';
})

