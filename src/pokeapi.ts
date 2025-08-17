import { N } from "vitest/dist/chunks/environment.d.cL3nLXbE";
import { Cache } from "./pokecache.js";
import { type CacheEntry } from "./pokecache.js";



export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache : Cache;
  constructor() {
    this.#cache = new Cache(1000);
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations>{

    const settings : RequestInit= {
    method:"GET",
    }
    let url = `${PokeAPI.baseURL}/location-area`;
    if(pageURL){
      url = pageURL;
    }

      const response = await fetch(url, settings);
      const data = await response.json()
      this.#cache.add(url,data)
      return data;
    }


  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`

    const settings : RequestInit= {
        method:"GET",
        headers:{
        }
    }

    const cachedValue = this.#cache.get(url)
    if(cachedValue){
        return cachedValue as Location;
      }
    
    
    const response = await fetch(url, settings);
    const data = await response.json()
    //console.log(data)
    this.#cache.add(url,data)
    return data;
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon>{
    const settings : RequestInit= {
    method:"GET",
    }
    let url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    const response = await fetch(url, settings);
    const data = await response.json()
    this.#cache.add(url,data)
      return data;
    }
}

export type ShallowLocations = {
  count: number,
  next: string | null,
  previous: string | null,
  results: {
    name:string,
    url: string
  }[],
};

export type Location = {
  name: string,
  id: number,
  pokemon_encounters: pokemon_encounters[],
  location: string,
};

export type pokemon_encounters = {
  pokemon:{
    name: string,
    url: string},
}

export type Pokemon = {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: boolean,
  order: number,
  weight: number,
};

