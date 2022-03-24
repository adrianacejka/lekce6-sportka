// SPORTKA


let vyherniCisla = document.querySelector('#vyherni-cisla');


function losuj() {

    vyherniCisla.innerHTML = '';
    let osudi = [];
    let tazenaCisla = [];

    // generovani osudi
    for (let i = 1; i <= 49; i = i + 1) {
        osudi.push(i);
    }

    // z osudi vyberu 7 nahodnych cisel
    for (let i = 0; i < 7; i++) {
        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];
        
        tazenaCisla.push(vyherniCislo); 
        osudi.splice(vyherniIndex, 1);
    }

    // vypis do HTML 

    /*
        for (let j = 0; j < tazenaCisla.length; j++) {
            
            setTimeout(function() { vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>'; }, 2000 * j);
            
        }
    */    

    
    // mám plné pole tazenaCisla se sedmi čísly, chci je postupně po dvou vteřinách  zobrazit

    tazenaCisla.forEach((ele, idx) => {
        setTimeout(() => {
        console.log(ele);
        vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[idx] + '</span>';
        }, idx * 2000);  
    });

    // let posledniCislo = document.querySelector("vyherniCisla:last-child");
    // posledniCislo.classList.remove(".cislo:last-child");
        

}


