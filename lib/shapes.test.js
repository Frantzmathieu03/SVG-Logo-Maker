import { Circle, Triangle, Square } from './shapes.js';

test('Circle renders correctly', () => {
  const circle = new Circle('blue');
  expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Triangle renders correctly', () => {
  const triangle = new Triangle('red');
  expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
});

test('Square renders correctly', () => {
  const square = new Square('green');
  expect(square.render()).toBe('<rect x="75" y="50" width="150" height="150" fill="green" />');
});
