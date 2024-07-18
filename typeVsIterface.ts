// 1. Intersection and Inheritance

interface NumLogger {
  log: (val: number) => void;
}
type StrAndNumLogger = NumLogger & {
  log: (val: string) => void;
};

const logger: StrAndNumLogger = {
  log: (val: string | number) => console.log(val),
};

logger.log(1);
logger.log("hi");

// interface StrLogger extends NumLogger {
//   log: (val:  string) => void;
// } ERROR

// 2. Union types can only be achieved with the type keyword:

type Fruit = "apple" | "pear" | "orange";
type Vegetable = "broccoli" | "carrot" | "lettuce";

// 'apple' | 'pear' | 'orange' | 'broccoli' | 'carrot' | 'lettuce';
type HealthyFoods = Fruit | Vegetable;

// 3. Tuples can only be typed via the type keyword:

type row = [colOne: number, colTwo: string];

<row>[1, "2"];

// 4. Mapped object types

type Fruit2 = "apple" | "orange" | "banana";

type FruitCount2 = {
  [key in Fruit2]: number;
};

const fruits: FruitCount2 = {
  apple: 2,
  orange: 3,
  banana: 4,
};

// ERROR:
// interface FruitCount {
//   [key in Fruit2]: number;
// }
