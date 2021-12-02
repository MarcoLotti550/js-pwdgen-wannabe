
let username = prompt("Inserisci il tuo nome:");
document.getElementById("name").innerHTML = username; 

let surname = prompt("Inserisci il tuo cognome:");
document.getElementById("surname").innerHTML = surname; 

let userage = prompt("Quanti anni hai?");
document.getElementById("userage").innerHTML = userage; 

let usercolor = prompt("Qual è il tuo colore preferito?");

document.getElementById("password").innerHTML = (username + surname + userage + usercolor); 
