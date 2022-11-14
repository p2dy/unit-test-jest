import {Stopwatch} from "./stopwatch";

const sleep = async (milliseconds: number) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

describe('stopwatch', () => {
    it('should start and stop', async () => {
        const startedWatch = new Stopwatch().start();
        await sleep(20);

        const milis = startedWatch.stop();

        expect(milis).toBeCloseTo(20, -1.3);
        // actual comparison: precision = numDigits
        // Math.abs(expected - actual) < Math.pow(10, -precision) / 2
    });
});