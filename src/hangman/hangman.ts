export class Hangman {
    private word: string;

    public constructor(word: string) {
        this.word = word;
    }

    public guess(letter: string): boolean {
        if (letter.length != 1) {
            throw new Error('A guess should contain only a single letter!')
        }
        return this.word.includes(letter);
    }

}

export interface Guess {
    isCorrect: boolean,
    resultWord: string
}