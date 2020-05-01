const message = document.getElementById("input").value;
const result = document.getElementById("minput");

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

for (let i = 0; i < message.length; i++) {
    array.push(message[i]);
}

for (let j = 0; j < array.length; j++) {
    for (let keys in morse) {
        if (morse[keys] === array[j]) {
            msg += keys;
        }
    }
}
console.log(msg);
