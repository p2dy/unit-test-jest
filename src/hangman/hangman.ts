export class Hangman {
    private hiddenWord: string;

    public constructor(hiddenWord: string) {
        this.hiddenWord = hiddenWord;
    }

    public guess(letter: string): boolean {
        if (letter.length != 1) {
            throw new Error('A guess should contain only a single letter!')
        }
        return this.hiddenWord.includes(letter);
    }

}