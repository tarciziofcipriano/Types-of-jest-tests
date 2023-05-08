export const sum = (a: number, b: number) => {
  return a + b;
};

export const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

export const dog = () => {
  return new Promise((resolve) => {
    resolve("pug");
  });
};

export const fooBar = (value: (e: string) => void) => {
  return value("foo");
};
