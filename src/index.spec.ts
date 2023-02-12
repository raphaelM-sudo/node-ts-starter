import { hello } from './index';

describe('node-ts-starter', () => {
    it('should return the greeting', () => {
        expect(hello()).toBe('Hello from node-ts-starter!');
    });
});
