import { State } from "./state";

export async function commandInspect(state: State, ...args:string[]){
    const pokemonName = args[0];
    if(!pokemonName){
        console.log("No pokemon name provided. Type \"help\" for usage");

    }
    if(pokemonName in state.pokedex){
        const pokemonData = state.pokedex[pokemonName]
        console.log(`Name: ${pokemonData.name}
Height: ${pokemonData.height}
Weight: ${pokemonData.weight}
Stats:`)
        for(const stat of pokemonData.stats){
            console.log(`-${stat.stat.name}: ${stat.base_stat}`)
        }
        console.log('Types:')
        for(const type of pokemonData.types){
            console.log(`- ${type.type.name}`)
        }
    }

    else{
        console.log(`You have not yet caught ${pokemonName}. Get back out there!`)
    }
}