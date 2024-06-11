//let achat = document.querySelectorAll('h6');


//declaration of variables for buying ticket process
let newBuy = document.querySelector('.nouveau');
let newPurchase = document.querySelector('.nouvel');
console.log(newBuy);
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
let btnPay = document.querySelector('.payer');
let noTicket = document.querySelector('.aucun');
console.log(noTicket);
let ticket = document.querySelector('.ticket');
console.log(ticket);
let utilisation = document.querySelector('.utilisation');
let successPAyment = document.querySelector('.paymentSuccess');
let footer = document.querySelector('footer');
let closeBtn = document.querySelector('.fermerPayment');
let boughtTicket = document.querySelector('.ticketAchete');
let useTicket = document.querySelector('.useTicket');
let usingTicket = document.querySelector('.usingTicket');
let btnUse = document.querySelector('.use');

//Declaration of variables for payment process
let pay = document.querySelector('.pay');
let language = document.getElementById('langSelect');
console.log(language);
let amount = document.querySelector('.montant');
let cardNumber = document.querySelector('.cardNum');
console.log(cardNumber);
let expiration = document.querySelector('.expiration');
let crypto = document.querySelector('.crypto');
let month = document.querySelector('.mois');
let year = document.querySelector('.annee');
let countdownElem = document.getElementById('countdown');
let countDownDate;
let countdownInterval;


newBuy.addEventListener('click', function () {
    noTicket.style.display = 'none';
    payment1.style.display = 'block';
    title.textContent = 'Acheter';
})



//Add new eventListener on variable closeIcon
//Declare and use a new function for redirecting to homepage
closeIcon.addEventListener("click", function () {
    document.location.href = "http://127.0.0.1:5500/titles.html";
})

//Add new eventListener on variable "plus" 
//Declare and use  new function for displaying gradually sections onclick
plus.addEventListener("click", function () {
    console.log('je suis dans la fonction');
    payment1.style.display = 'none';
    payment2.style.display = 'block';
    pay.style.display = 'none';
});

//Add new eventListener on variable "btnAcheter"
btnAcheter.addEventListener("click", function () {
    payment2.style.display = 'none';
    payment3.style.display = 'block';
    payment4.style.display = 'none';
    pay.style.display = 'none';
    title.textContent = 'Paiement';
    closeIcon.style.display = 'none';
    previousIcon.style.display = 'block';
})

//Add new eventListener on variable "previousIcon"
previousIcon.addEventListener("click", function () {
    payment1.style.display = 'none';
    payment2.style.display = 'block';
    payment3.style.display = 'none';
    payment4.style.display = 'none';
    pay.style.display = 'none';
    previousIcon.style.display = 'none';
    closeIcon.style.display = 'block';
})

//Add new eventListener on variable "caseCochee"
caseCochee.addEventListener("click", function () {
    payment3.style.display = 'none';
    payment4.style.display = 'block';
    pay.style.display = 'none';
    title.textContent = 'Paiement';
})

//New eventListener for payment process

btnPay.addEventListener('click', function () {
    payment1.style.display = 'none';
    payment2.style.display = 'none';
    payment3.style.display = 'none';
    payment4.style.display = 'none';
    pay.style.display = 'none'
    previousIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    title.textContent = 'Paiement';
    pay.style.display = 'block';
    successPAyment.style.display = 'none';
})

const translations = {
    EN: {
        amount: 'Amount: 1.20 £',
        cardNumber: 'Card Number',
        expiration: 'Expiration Date',
        crypto: 'Security code',
    },
    ES: {
        amount: 'Importe: 1,20 £',
        cardNumber: 'Numero de tarjeta',
        expiration: 'Válida hasta',
        crypto: 'CVV',
    },
};

//Declare new function for updating language

function updateLang(lang) {
    const translation = translations[lang];
    amount.textContent = translation.amount;
    cardNumber.textContent = translation.cardNumber;
    expiration.textContent = translation.expiration;
    crypto.textContent = translation.crypto;
}

//New eventListener for detecting language changes
language.addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    updateLang(selectedLang);
});

//Define default language
updateLang('EN');

let btnSubmit = document.querySelector('.submit');
console.log(btnSubmit);


btnSubmit.addEventListener('click', function () {
    successPAyment.style.display = 'block';
    pay.style.display = 'none';
    noTicket.style.display = 'none';
    ticket.style.display = 'none';
    utilisation.style.display = 'none';
    btnAcheter.textContent = 'Fermer';
})


closeBtn.addEventListener('click', function () {
    ticket.style.display = 'block';
    successPAyment.style.display = 'none';
    footer.style.display = 'block';
    title.textContent = 'E-Tickets';
    previousIcon.style.display = 'none';
    newPurchase.style.display = 'block';
})

boughtTicket.addEventListener('click', function () {
    newPurchase.style.display = 'none';
    footer.style.display = 'none';
    useTicket.style.display = 'block';
    usingTicket.style.display = 'none';
    ticket.style.display = 'block'
})



// Vérifier si une date de fin de compte à rebours est stockée dans le localStorage
const storedCountDownDate = localStorage.getItem('countDownDate');

if (storedCountDownDate) {
    // Si une date de fin est stockée, l'utiliser pour initialiser le compte à rebours
    countDownDate = parseInt(storedCountDownDate);
    // Lancer le compte à rebours
    startCountdown();
}

btnUse.addEventListener('click', function () {
    newPurchase.style.display = 'none';
    footer.style.display = 'none';
    useTicket.style.display = 'none';
    usingTicket.style.display = 'block';
    ticket.style.display = 'none';
    noTicket.style.display = 'none';

    if (!countDownDate) {
        // Définir une nouvelle date de fin (par exemple, dans 1 heure)
        countDownDate = new Date().getTime() + (60 * 60 * 1000);
        // Sauvegarder la date de fin du compte à rebours dans le localStorage
        localStorage.setItem('countDownDate', countDownDate);
        // Lancer le compte à rebours
        startCountdown();
    }
});

function startCountdown() {
    clearInterval(countdownInterval); // Arrêter l'intervalle précédent, s'il existe

    countdownInterval = setInterval(function () {
        // Obtenir la date et l'heure actuelles
        let now = new Date().getTime();

        // Calculer la distance entre maintenant et la date de fin
        let distance = countDownDate - now;

        // Calculer les heures, minutes et secondes restants
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Afficher le compte à rebours dans l'élément HTML
        countdownElem.innerHTML = `${hours}:${minutes}:${seconds}`;

        // Si le compte à rebours est terminé, afficher un message et arrêter l'intervalle
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElem.innerHTML = "EXPIRÉ";
        }
    }, 1000);
}