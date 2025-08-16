import { State } from "./state";
import { Location } from "./pokeapi";

export async function commandExplore(state: State, ...areaName: string[]) {
    let locationData : Location;
    if(areaName){
        locationData = await state.api.fetchLocation(areaName[0]);
        console.log("Exploring pastoria-city-area...\nFound Pokemon:")
        for(const mon of locationData.pokemon_encounters){
            console.log(`- ${mon.pokemon.name}`)
        }
    }
    else{
        throw new Error("No location name provided. Type \"help\" for usage.")
    }

}
