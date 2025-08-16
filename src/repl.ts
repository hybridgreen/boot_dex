
import { error } from "console";
import { State } from "./state.js";

export function cleanInput(input: string): string[]{
    return input.trim().toLowerCase().split(" ");
}

export async function startREPL(state: State){
    
    state.read.prompt();
    
    state.read.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length === 0){
            state.read.prompt()
        }
        else{
            const commandName = words[0]
            const cmd = state.commands[commandName];

            if (!cmd) {
            console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`,);
            state.read.prompt();
            }

            try{
                await cmd.callback(state);
                state.read.prompt();
            }catch(err){
                if( err instanceof Error){
                    console.log(`An error occurred: ${err.message}`);
                }
                else{
                    console.log(`An error has cocured ${err}`);
                }
            }

        }
    });
}