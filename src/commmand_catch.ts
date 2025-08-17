import { State } from "./state";

export async function commandCatch(state: State, ...pokemon: string[]) {

    if(pokemon){
        const pokemonName =  pokemon[0];
        console.log(`Throwing a Pokeball at ${pokemonName}...`);
        const pokemonData = await state.api.fetchPokemon(pokemonName);

    const res = Math.floor(Math.random() * pokemonData.base_experience);
    if (res > 40) {
        console.log(`${pokemonName} escaped!`);
        return;
    }

    console.log(`${pokemonName} was caught!`);
    console.log("You may now inspect it with the inspect command.");
    state.pokedex[pokemonName] = pokemonData;}

    else{
        console.log("No pokemon name provided. Type \"help\" for usage.")
    }

}
