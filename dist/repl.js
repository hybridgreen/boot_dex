import { createInterface } from "readline";
import { getCommands } from "./commands.js";
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
            const command = getCommands()[words[0]];
            command.callback(getCommands());
            read.prompt();
        }
    });
}
