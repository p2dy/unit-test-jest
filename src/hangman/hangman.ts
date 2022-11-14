export class Hangman {
    private readonly word: string;
    private readonly hiddenWord: string;

    public constructor(word: string) {
        this.word = word;
        this.hiddenWord = '*'.repeat(this.word.length)
    }

    public guess(letter: string): Guess {
        if (letter.length != 1) {
            throw new Error('A guess should contain only a single letter!')
        }

        let resultWord = this.hiddenWord;
        for (let position = 0; position < this.word.length; position++) {
            if (this.word[position] === letter) {
                resultWord = resultWord.substring(0, position) + letter + resultWord.substring(position + letter.length)
            }
        }

        return {
            isCorrect: this.word.includes(letter),
            resultWord: resultWord
        };
    }
}

export interface Guess {
    isCorrect: boolean,
    resultWord: string
}