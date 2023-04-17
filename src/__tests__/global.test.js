const text = "Hola mundo";
const numeros = [1, 2, 3];
test("Debe contener la palabra mundo", () => {
  expect(text).toMatch(/mundo/);
});
test("Nuestro array contiene un dos", () => {
  expect(numeros).toContain(2);
});
test("Es igual o menor que 10", () => {
  expect(10).toBeLessThanOrEqual(10);
});
test("Es verdadero", () => {
  expect(1).not.toBeUndefined();
});
test("Es falso", () => {
  expect({}).not.toBeFalsy();
});
const reverseString = (string, callback) => {
  callback(string.split("").reverse().join(""));
};
test("Probando un callback", () => {
  reverseString("hola", (str) => {
    expect(str).toBe("aloh");
  });
});
const reverseString2 = (string) => {
  return new Promise((resolve, reject) => {
    if (!string) {
      reject(Error("Error"));
    }
    resolve(string.split("").reverse().join(""));
  });
};
test("Probando una promesa", async () => {
  const string = await reverseString2("Hola");
  expect(string).toBe("aloH");
});
// afterEach(() => {
//   console.log("prueba realizada");
// });
// afterAll(() => {
//   console.log("Todas las pruebas se han completado");
// });
