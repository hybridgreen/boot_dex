import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapb } from "./command_map.js";
import { CLICommand } from "./state.js";



export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays the available commands and uses",
            callback: commandHelp,
        },
        map:
        {
            name: "map",
            description: "Displays the name of the next 20 locations areas in the world",
            callback: commandMap,
        },
        mapb:
        {
            name: "mapb",
            description: "Displays the name of the previous 20 locations areas in the world",
            callback: commandMapb,
        },
    }
}