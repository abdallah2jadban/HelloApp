const hello = require('./index');

test('say hello', () => {
    expect(hello('World')).toBe('Hello, World!');
});
