import type { State } from "./state";

export async function commandExit(state: State){
    console.log("Closing the Pokedex... Goodbye!");
    state.read.close();
    (globalThis as any).process.exit(0);
}