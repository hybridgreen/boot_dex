import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapb } from "./command_map.js";
import { CLICommand } from "./state.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./commmand_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";



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
        explore:
        {
            name: "explore",
            description: "Displays the pokemons known to this location. Usage explore areaName",
            callback: commandExplore,
        },
        catch:
        {
            name: "catch",
            description: "Catch a pokemon and add it to the Pokedex. Usage: Catch Pikachu",
            callback: commandCatch,
        },
        inspect:
        {
            name: "inspect",
            description: "Inspect a pokemon from the pokedex. Usage: Inspect Squirtle",
            callback: commandInspect,
        },
        pokedex:
        {
            name: "Pokedex",
            description: "List all pokemon from the pokedex. Usage: Inspect Squirtle",
            callback: commandPokedex,
        },
    }
}