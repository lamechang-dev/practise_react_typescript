// const permissions = {
//   r: 0b100,
//   w: 0b010,
//   x: 0b001,
// };

// type PermsChar = keyof typeof permissions; // 'r' | 'w' | 'x'
// const readable: PermsChar = 'r';
// // const writable: PermsChar = 'z';  /* compile error */


const test = {
  a: 12,
  b: 12
};

type testKeyType = keyof typeof test;

const a: testKeyType = 'a';