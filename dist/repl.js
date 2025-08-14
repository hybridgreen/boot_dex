import { createInterface } from "node:readline";
export function cleanInput(input) {
    return input.trim().toLowerCase().split(" ");
}
export function startREPL() {
    const read = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    read.prompt();
    const stream = read.on("line", (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            read.prompt();
        }
        else {
            console.log(`Your command was: ${words[0]}`);
            read.prompt();
        }
    });
}
