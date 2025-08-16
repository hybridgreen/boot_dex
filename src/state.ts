import { getCommands } from "./commands.js";
import { createInterface, type Interface } from "readline";
import {PokeAPI} from "./pokeapi.js"

export type State = {
    read: Interface,
    commands: Record<string, CLICommand>,
    api: PokeAPI
    nextLocationsURL?:string|null,
    prevLocationsURL?: string|null
};

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...arg: string[]) => Promise<void>;
}

export function initState() : State{
    return {
        read: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt:"Pokedex > "
        }),
         commands: getCommands(),
         api : new PokeAPI()
        }
};