export const QUESTIONS = [
  {
    id: 1,
    text: "Co robi metoda Array.prototype.map() w JavaScript?",
    answers: [
      {
        text: "Modyfikuje każdy element tablicy według funkcji przekazanej jako argument.",
        isCorrect: false,
      },
      {
        text: "Tworzy nową tablicę zawierającą wyniki wywołania funkcji dla każdego elementu tablicy.",
        isCorrect: true,
      },
      {
        text: "Filtruje tablicę według określonego kryterium.",
        isCorrect: false,
      },
      { text: "Nic, to jest błędna metoda w JavaScript.", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "Jakie słowo kluczowe w JavaScript tworzy zmienną o zasięgu blokowym?",
    answers: [
      { text: "var", isCorrect: false },
      { text: "let", isCorrect: true },
      { text: "const", isCorrect: false },
      { text: "block", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "Jaka metoda jest używana do przekształcania obiektu JSON w łańcuch znaków?",
    answers: [
      { text: "JSON.parse()", isCorrect: false },
      { text: "JSON.stringify()", isCorrect: true },
      { text: "JSON.toObject()", isCorrect: false },
      { text: "JSON.toString()", isCorrect: false },
    ],
  },
  {
    id: 4,
    text: "Który z poniższych nie jest typem danych w JavaScript?",
    answers: [
      { text: "undefined", isCorrect: false },
      { text: "number", isCorrect: false },
      { text: "boolean", isCorrect: false },
      { text: "character", isCorrect: true },
    ],
  },
  {
    id: 5,
    text: "Jakie wyrażenie tworzy funkcję strzałkową w JavaScript?",
    answers: [
      { text: "const func = () => {}", isCorrect: true },
      { text: "function func() {}", isCorrect: false },
      { text: "var func = function() {}", isCorrect: false },
      { text: "let func = => {}", isCorrect: false },
    ],
  },
  {
    id: 6,
    text: "Jak zadeklarować klasę w JavaScript?",
    answers: [
      { text: "class MyClass {}", isCorrect: true },
      { text: "function MyClass() {}", isCorrect: false },
      { text: "create class MyClass {}", isCorrect: false },
      { text: "new Class MyClass {}", isCorrect: false },
    ],
  },
  {
    id: 7,
    text: "Która metoda nie służy do iteracji po elementach tablicy?",
    answers: [
      { text: "forEach()", isCorrect: false },
      { text: "map()", isCorrect: false },
      { text: "filter()", isCorrect: false },
      { text: "concat()", isCorrect: true },
    ],
  },
  {
    id: 8,
    text: "W jaki sposób można dodać element na koniec tablicy?",
    answers: [
      { text: "array.push(element)", isCorrect: true },
      { text: "array.pop(element)", isCorrect: false },
      { text: "array.unshift(element)", isCorrect: false },
      { text: "array.shift(element)", isCorrect: false },
    ],
  },
  {
    id: 9,
    text: "Jak sprawdzić, czy wartość jest typu 'Array'?",
    answers: [
      { text: "Array.isArray(value)", isCorrect: true },
      { text: "value.isArray()", isCorrect: false },
      { text: "value instanceof Array", isCorrect: false },
      { text: "typeof value === 'array'", isCorrect: false },
    ],
  },
  {
    id: 10,
    text: "Jaki jest wynik porównania '5' == 5?",
    answers: [
      { text: "true, ponieważ wartości są równe.", isCorrect: true },
      { text: "false, ponieważ typy są różne.", isCorrect: false },
      { text: "TypeError", isCorrect: false },
      { text: "undefined", isCorrect: false },
    ],
  },
];
