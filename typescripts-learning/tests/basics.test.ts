import { greet, createUser, coordinates, favoriteColor, rgb } from '../src/basics/01-types';

describe('TypeScript Basics', () => {
  describe('Function Tests', () => {
    test('greet function should return correct greeting', () => {
      const result = greet('World');
      expect(result).toBe('Hello, World!');
    });

    test('createUser function should create user with name', () => {
      const user = createUser('John');
      expect(user.name).toBe('John');
      expect(user.age).toBeUndefined();
    });

    test('createUser function should create user with name and age', () => {
      const user = createUser('Jane', 25);
      expect(user.name).toBe('Jane');
      expect(user.age).toBe(25);
    });
  });

  describe('Type Tests', () => {
    test('coordinates should have correct structure', () => {
      expect(coordinates).toHaveProperty('x');
      expect(coordinates).toHaveProperty('y');
      expect(typeof coordinates.x).toBe('number');
      expect(typeof coordinates.y).toBe('number');
    });

    test('rgb should be a tuple with 3 numbers', () => {
      expect(Array.isArray(rgb)).toBe(true);
      expect(rgb.length).toBe(3);
      expect(rgb.every(val => typeof val === 'number')).toBe(true);
    });

    test('favoriteColor should be a valid enum value', () => {
      expect(typeof favoriteColor).toBe('string');
      expect(['RED', 'GREEN', 'BLUE']).toContain(favoriteColor);
    });
  });
}); 