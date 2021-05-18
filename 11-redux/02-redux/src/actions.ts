export const CounterActionType = {
  ADD: 'ADD',
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
} as const;

type ValueOf<T> = T[keyof T];

export type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
  amount?: number;
};

const obj = { a: 1, b: 2, c: 3 };
console.log('a' in obj); // true for(constkeyinobj){console.log(key);} //abc
type Fig = 'one' | 'two' | 'three';
type FigMap = { [k in Fig]?: number };
const figMap: FigMap = {
  one: 1,
  two: 2,
  three: 3,
};
figMap.four = 4; // compileerror!

export const add = (amount: number): CounterAction => ({
  type: CounterActionType.ADD,
  amount,
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});
