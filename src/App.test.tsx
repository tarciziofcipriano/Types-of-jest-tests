import { render, screen } from "@testing-library/react";
import App from "./App";
import { dog, fooBar, shoppingList, sum } from ".";

test("Checar se existe a string 'Learn React' no componente App.tsx", () => {
  // Importando um componente:
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Checar se 1 + 2 é igual a 3 com função", () => {
  // Importando uma função:
  expect(sum(1, 2)).toBe(3);
});

test("Checar se na array 'shoppingList' contém a string 'milk'", () => {
  // Importando uma função:
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

test("Checar se o cachorro é um pug", async () => {
  // Utilizando Promise:
  const mydog = await dog();
  expect(mydog).toBe("pug");
});

test("Mockar palavra 'foo' substituindo pela a palavra 'bar'", () => {
   // Utilizando mock:
  const mockFn = jest.fn(() => "bar");
  const value = fooBar(mockFn);
  expect(mockFn).toHaveBeenCalled();
  expect(value).toBe("bar");
});

test("Checar uma soma de 2 + 2", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("Checando se o valor é igual a Null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("Checando se o valor é igual a zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
