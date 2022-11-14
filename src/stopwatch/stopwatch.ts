export class Stopwatch {
    private startTime: number | undefined;

    private readonly now = () => Date.now();

    public start() : Stopwatch {
        this.startTime = this.now();
        return this;
    }

    public stop() : number | undefined {
        const stopTime = this.now();
        return this.startTime ? stopTime - this.startTime : undefined;
    }
}