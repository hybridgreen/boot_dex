import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import {CLICommand} from "./command.js"


export function getCommands(): Record<string, CLICommand> {
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
    }
}