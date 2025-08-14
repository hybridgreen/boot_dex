import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "    Hello world      ",
        expected: ["hello", "world"]
    },
    {
        input: "    Charmander Bulbasaur PIKACHU   ",
        expected: ["charmander", "bulbasaur", "pikachu"]
    },
    {
        input: "    RAIKOU Suicune Entei ",
        expected: ["raikou", "suicune", "entei"]
    }

])("cleanInput($input)", ({input, expected}) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);

        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
      // likewise, the `toBe` function will fail the test if the values are not equal
        expect(actual[i]).toBe(expected[i]);
        }
    });

});