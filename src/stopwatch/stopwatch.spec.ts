import mock = jest.mock;
import {Stopwatch} from "./stopwatch";

describe('stopwatch', () => {
    it('should start and stop', () => {
        const stopwatch = new Stopwatch();

        const milis = stopwatch.start().stop();

        expect(milis).toBe(20);
    });
});