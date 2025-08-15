export function commandExit(){
    console.log("Closing the Pokedex... Goodbye!");
    (globalThis as any).process.exit(0);
}