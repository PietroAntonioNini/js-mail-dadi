//salvo input e button
let userNumber = document.querySelector("input");
console.log(userNumber);

const buttonElement = document.querySelector("#roll");
console.log(buttonElement);

//salvo il valore dell'input
let user;

//creo la funzione al click
buttonElement.addEventListener("click", 
    function() {

        //salvo il valore inserito dall'utente
        userNumber = Number(document.querySelector("input").value);
        console.log(userNumber);

        //controllo se i dati inseriti dall'utente sono corretti
        if(userNumber <= 0 || userNumber > 6) {

            document.querySelector("#result").innerText = "Inserisci un numero da 1 a 6!";
            document.querySelector("#info").innerText = "";

        } else {

            //genero un numero casuale del computer da 1 a 6
            let computerNumber = Math.floor (Math.random() * 6) + 1;
            console.log(computerNumber);

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
        
    }
)