const randomString = require('../index');
describe('Probando funcionalidades de nuestra funcion randomStrings', () => {
  test('Probar función', () => {
    expect(typeof randomString()).toBe('string');
  });
  test('Comprobar que no existe una ciudad', () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
test('probando linter', () => {
  const data = 'hola';
  expect(typeof data).toBe('string');
});
