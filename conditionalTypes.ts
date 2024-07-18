interface Animal {
  voice: string;
}

interface Dog extends Animal {
  type: string;
}

type ConditionalType = Dog extends Animal ? string : unknown;
