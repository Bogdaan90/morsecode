const message = document.getElementById("input").value.toUpperCase();
let result = document.getElementById("minput");

let morse = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

let array = [];
let msg = "";

// l-am facut pt a imparti mesajul in litere individuale pt a le putea compara cu obiectul
for (let i = 0; i < message.length; i++) {
    array.push(message[i]);
}
// primul loop este pt mesaj iar cel de-al doilea pt obiect (daca le puneam invers, rezultatul era in ordine alfabetica)
for (let j = 0; j < array.length; j++) {
    // loop pt obiect
    for (let keys in morse) {
        if (morse[keys] === array[j]) {
            msg += keys;
        }
    }
}

result.value = msg;

document.getElementById("btn").addEventListener("click", function () {
    let text = document.getElementById("minput");
    text.value += msg;
});
