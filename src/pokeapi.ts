import { N } from "vitest/dist/chunks/environment.d.cL3nLXbE";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations>{

    const url = `${PokeAPI.baseURL}/location-area`;

    const settings : RequestInit= {
        method:"GET",
        headers:{
        }
    }
    if(pageURL){
      const response = await fetch(pageURL, settings);
      return response.json();
    }
    else{
      const response = await fetch(url, settings);
      return response.json();
    }

  }

  async fetchLocation(locationName: string): Promise<Location> {
    const Url = `${PokeAPI.baseURL}/location-area/${locationName}`
    const settings : RequestInit= {
        method:"GET",
        headers:{
        }
    }
    const response = await fetch(Url, settings);
    return response.json();
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
};