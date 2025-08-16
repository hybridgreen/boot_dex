import { TIMEOUT } from "dns";
import { type setTimeout } from "timers";
import { it } from "vitest";

export type CacheEntry<T> = {
    createdAt:number,
    val: T
}

export class Cache{

    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId : NodeJS.Timeout | undefined = undefined;
    #interval: number;
    
    constructor(interval:number){
        this.#interval = interval;
        this.#startReapLoop();
    }
    add<T>(key:string, val: T) {
        const now = Date.now()
        this.#cache.set(key,{createdAt: now, val:val });
    }

    get<T>(key:string): T| undefined{
        if(this.#cache.has(key)){
            const cachedValue = this.#cache.get(key)?.val as T
            return cachedValue;
        }
        return undefined;
    }

    #reap(){
        for (const id of this.#cache.keys()){
            const entry = this.#cache.get(id);
                if (entry && entry.createdAt < (Date.now() - this.#interval)){
                this.#cache.delete(id);
            }
        }
        }
    #startReapLoop(){
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval)
    }

    stopReapLoop(){
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
    }