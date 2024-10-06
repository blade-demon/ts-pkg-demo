import { test, expect } from 'vitest';
import { add, subtract } from './utils.js';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract', () => {
  expect(subtract(1, 2)).toBe(-1);
});
