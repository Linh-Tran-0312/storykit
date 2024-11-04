import { describe, test, expect } from '@jest/globals';
import sum from './sum';

describe('sum module', () => {
    test('adds 1 + 2 equals to 3', () => {
        expect(sum(1,2)).toBe(3)
    })
})