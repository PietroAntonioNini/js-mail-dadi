
// salvo gli elementi email e button
let email = document.querySelector("input");
let send = document.querySelector("#send");

console.log(email);
console.log(send);

//creo un array di email verificate
const emails = ["lucia.rossi@outlook.it", "marco.bianchi@gmail.com", "giulia.verdi@yahoo.com", "matteo.romano@libero.it"];

send.addEventListener("click", 
    function() {

        //registro l'email inserita dall'utente
        email = document.querySelector("input").value;
        console.log(email);

        //controllo se il dato inserito è presente nel database
        if (email === emails[0] || email === emails[1] || email === emails[2] || email === emails[3]) {
            document.querySelector("#result").innerText = "Puoi accedere al sito!";
            document.querySelector("#alert").innerText = "";

        } else {
            document.querySelector("#result").innerText = "Non puoi accedere al sito!";
            document.querySelector("#alert").innerText = `L'email "${email}" non risulta registrata!`;
        }
    }
)
