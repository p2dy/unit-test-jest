import {Hangman} from "./hangman";

describe("guess a letter", () => {
    it("should return false for a wrong letter", () => {
        const hangman = new Hangman("test word");

        const actual = hangman.guess('a');

        expect(actual).toBeFalsy();
    });
});