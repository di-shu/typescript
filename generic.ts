interface SomeValueContainer<Value> {
  // Factory for user types
  value: Value; // Set type for value based on Value's type
}

type myType = SomeValueContainer<string>;

const myTypeVariable: myType = {
  value: "string",
};

type myType2 = SomeValueContainer<number>;

const myType2Variable: myType2 = {
  value: 1,
};
