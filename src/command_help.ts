import {CLICommand, State} from "./state.js"

export async function commandHelp(state: State){
    console.log(
        `Welcome to the Pokedex! 
Usage:`);
    for(const cmd in state.commands){
        console.log(`${cmd}: ${state.commands[cmd].description}`)
    }
}