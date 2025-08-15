export function commandHelp(commands) {
    console.log(`Welcome to the Pokedex! 
Usage:`);
    for (const cmd in commands) {
        console.log(`${cmd}: ${commands[cmd].description}`);
    }
}
