
import { ShallowLocations } from "./pokeapi.js";
import {State} from "./state.js"


export async function commandMap(state: State) {
    let locationsJSON : ShallowLocations;
    if(state.nextLocationsURL){
        locationsJSON = await state.api.fetchLocations(state.nextLocationsURL);
        state.nextLocationsURL = locationsJSON.next;
        state.prevLocationsURL = locationsJSON.previous;
    }
    else{
        locationsJSON = await state.api.fetchLocations();
        state.nextLocationsURL = locationsJSON.next;
        state.prevLocationsURL = locationsJSON.previous;
    }
    for(const location of locationsJSON.results){
       console.log(location.name);
    }

}

export async function commandMapb(state: State) {
    if(state.prevLocationsURL){
        const locationsJSON = await state.api.fetchLocations(state.prevLocationsURL);
        state.nextLocationsURL = locationsJSON.next;
        state.prevLocationsURL = locationsJSON.previous;
    for(const location of locationsJSON.results){
       console.log(location.name);
    }
    }
    else{
        console.log("you're on the first page")
    }
    
}