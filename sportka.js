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
    
    for (let j = 0; j < tazenaCisla.length; j++) {

        function vypisCisla() {
            setTimeout(function() { vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>'; }, 2000 * j);
        }
        
        vypisCisla();
    }

    
    
    /*
    for (let j = 0; j < tazenaCisla.length; j++) {
       vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>';
    }

    */
    
    /*
    let j = 0;
    
    while (j < tazenaCisla.length) {

        function pridejCislo() {
            vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[j] + '</span>';
        }

        function pridejIndex() {
            j++;
        }

        if (j < tazenaCisla.length) {
            setTimeout(pridejIndex, 3000);
        }

        pridejCislo();
        pridejIndex();

    }

    */


 
}


