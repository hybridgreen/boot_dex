import {CLICommand} from "./command.js"

export function commandHelp(commands: Record<string, CLICommand>){
    console.log(
        `Welcome to the Pokedex! 
Usage:`);
    for(const cmd in commands){
        console.log(`${cmd}: ${commands[cmd].description}`)
    }
}