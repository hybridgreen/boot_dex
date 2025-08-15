import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Prints out the available commands and uses",
            callback: commandHelp,
        },
    };
}
