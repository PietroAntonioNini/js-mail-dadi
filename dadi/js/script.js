//salvo l'elemento button
const buttonElement = document.querySelector("#roll");

//creo la funzione al click
buttonElement.addEventListener("click", 
    function() {

        //genero un numero casuale dell'utente da 1 a 6
        let userNumber = Math.floor (Math.random() * 6) + 1;

        //genero un numero casuale del computer da 1 a 6
        let computerNumber = Math.floor (Math.random() * 6) + 1;

        document.querySelector("#info").innerText = `Hai tirato "${userNumber}" il computer ha tirato "${computerNumber}"`;

        //controllo quale è piu grande e valuto se
        if(userNumber > computerNumber) {
            document.querySelector("#result").innerText = "Hai Vinto!"
        } else if(userNumber == computerNumber) {
            document.querySelector("#result").innerText = "Pareggio!"
        } else {
            document.querySelector("#result").innerText = "Hai perso!"
        }
    }
)