function trivia() {
    const right_answer = "meeple";
    var attempts = 4;
    var guessed = false;
    var player_guess = "";
    var player_name = "";
    var clues = [
        "Se usa mucho en los juegos de mesa para representar personitas de tu color.",
        "Suena como combinar las palabras en inglés para 'yo' y 'gente'.",
        "Bueno, quizás lleve una e más en algún lado",
        "Última pista, podés encontrarlo en algún lado de la página inicial, medio escondido ;)"
    ]
    
    player_name = prompt("Primero, decinos tu nombre :)\n");

    while (!guessed && attempts > 0) {
        player_guess = prompt("¿Cuál es tu respuesta?");
        
        if (player_guess.toLowerCase() == right_answer) {
            alert("¡Felicitaciones! ¿Adivinaste bien, o ya la sabías?");
            guessed = true;
        } else {
            alert("Nop, esa no es.\nTe quedan " + (attempts-1) + " intentos\nPista:\n" + clues[4 - attempts]);
            attempts--;
        }        
    }
}
