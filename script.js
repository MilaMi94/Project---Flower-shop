// get elements 
let inputRuze = document.getElementById('r');
let inputLjiljani = document.getElementById('lj');
let inputGerberi = document.getElementById('g');
let btnIzracunaj = document.getElementById('izracunaj');
let btnResetuj = document.getElementById('resetuj');
let checkboxBombonjera = document.getElementById('bombonjera');
let checkboxCokolada = document.getElementById('cokolada');
let checkboxSampanjac = document.getElementById('sampanjac');
let divCvece = document.getElementById('cvece');
let divPokloni = document.getElementById('pokloni');
let divCene = document.getElementById('cene')
let listenerAdded = false;

// variables 
let cenaDodatnihPoklona = 500;
let cenaJedneRuze = 150;
let cenaJednogLjiljana = 120;
let cenaJednogGerbera = 70;
let putanjaRuza = `rose.png`;
let putanjaLjiljan = `lilly.png`;
let putanjaGerber = `gerber.png`;



btnIzracunaj.addEventListener("click", () => {
    if (!listenerAdded) {

        // sum flowers
        let cenaRuza = inputRuze.value * cenaJedneRuze;
        let cenaLjiljana = inputLjiljani.value * cenaJednogLjiljana;
        let cenaGerbera = inputGerberi.value * cenaJednogGerbera;
        let sumCveca = cenaRuza + cenaGerbera + cenaLjiljana;
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');


        //  sum additional gifts
        let br = 0;
        markedCheckbox.forEach(checkbox => {
            br++;
        })
        let sumDodatniPokloni = br * cenaDodatnihPoklona;

        //sum all
        let sumUkupno = sumCveca + sumDodatniPokloni;


        //show hidden div
        kraj_porudzbine.style.display = "block";

        //show flowers
        for (let i = 1; i <= (cenaRuza / cenaJedneRuze); i++) {
            let slikaRuza = document.createElement('img');
            slikaRuza.setAttribute("src", `${putanjaRuza}`);
            divCvece.appendChild(slikaRuza);

        }
        //add linebreak
        divCvece.append(document.createElement('br'));

        for (let i = 1; i <= (cenaLjiljana / cenaJednogLjiljana); i++) {
            let slikaLjiljan = document.createElement('img');
            slikaLjiljan.setAttribute("src", `${putanjaLjiljan}`);
            divCvece.appendChild(slikaLjiljan);

        }
        //add linebreak
        divCvece.append(document.createElement('br'));

        for (let i = 1; i <= (cenaGerbera / cenaJednogGerbera); i++) {
            let slikaGerber = document.createElement('img');
            slikaGerber.setAttribute("src", `${putanjaGerber}`);
            divCvece.appendChild(slikaGerber);

        }
        //add linebreak
        divCvece.append(document.createElement('br'));


       //div which shows only when additional gifts are checked
        let checkboxes = document.querySelectorAll('input[name="dodatni_pokloni"]:checked');
        checkboxes.forEach((checkbox) => {
            let spanDodatniPokloni = document.createElement('span');
            let dodatniPokloni = document.createTextNode(` +${checkbox.value}`);
            spanDodatniPokloni.append(dodatniPokloni);
            divPokloni.append(spanDodatniPokloni);
            divPokloni.append(document.createElement('br'));
            spanDodatniPokloni.style.color = 'purple';
        });

        //payments
        let placanje = document.querySelector('input[type="radio"]:checked');

        //if(payment == card)=> 
        if (placanje.value == 'kartica') {
            let spanCenaBezPopusta = document.createElement('span');
            let cenaBezPopusta = document.createTextNode(`Cena bez popusta je:  ${sumUkupno}din.`);
            spanCenaBezPopusta.append(cenaBezPopusta);
            divCene.append(spanCenaBezPopusta);
            divCene.append(document.createElement('br'));
            // cena sa popustom
            let cenaSaPopustom = 0.9 * sumUkupno;
            let spanCenaSaPopustom = document.createElement('span');
            divCene.append(spanCenaSaPopustom);
            //boja
            spanCenaSaPopustom.style.color = "purple";
            spanCenaBezPopusta.style.color = "purple";
            //checking if summ all > 2000
            if (sumUkupno > 2000) {
                let textCenaSaPopustom = document.createTextNode(`Cena sa popustom je: ${cenaSaPopustom}din.`);
                spanCenaSaPopustom.append(textCenaSaPopustom);
                divCene.append(spanCenaSaPopustom);

            } else {
                let textCenaSaPopustom = document.createTextNode(`Cena sa popustom je:  ${sumUkupno}din.`);
                spanCenaSaPopustom.append(textCenaSaPopustom);

            }
            // cash
        } else {
            let spanCenaBezPopustaKes = document.createElement('span');
            let textCenaBezPopustaKes = document.createTextNode(`Ukupna cena je:  ${sumUkupno}din.`);
            spanCenaBezPopustaKes.append(textCenaBezPopustaKes);
            divCene.append(spanCenaBezPopustaKes);
            //color
            spanCenaBezPopustaKes.style.color = 'purple';
        }

    }
    listenerAdded = true;
});

// button reset
btnResetuj.addEventListener('click', () => {
    document.getElementById('cvece').innerHTML = '';
    document.getElementById('pokloni').innerHTML = '';
    document.getElementById('cene').innerHTML = '';
    listenerAdded = false;

})

// input if begins with 0
const inputElements = document.querySelectorAll(".input0");
inputElements.forEach(function (input) {

    input.addEventListener("input", function () {

        if (this.value.startsWith('0')) {
            this.value = this.value.slice(1);
        }
    });
});


//Carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) { 
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}

