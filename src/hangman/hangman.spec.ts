import {guess} from "./hangman";

describe("guess a letter", () => {
    it("should return false for a wrong letter", () => {
        expect(guess('a')).toBeFalsy();
    })
})