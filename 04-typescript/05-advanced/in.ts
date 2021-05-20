const obj = { a: 1, b: 2, c: 3 };
console.log('a' in obj);                      // true
for (const key in obj) { console.log(key); }  // a b c

type Fig = 'one' | 'two' | 'three';
type FigMap = { [k in Fig]?: number };

const figMap: FigMap = {
  one: 1,
  two: 2,
  three: 3,
};
// figMap.four = 4; /* compile error */


type Cat = 'peco' | 'techi' | 'teto';
type CatMap = { [k in Cat]: number };

const catMap: CatMap = {
  'peco': 12,
  'techi': 15,
  'teto': 16
};

type CatAgeData = { [name: string]: number };

const catAgeData: CatAgeData = {
  'peco': 12,
};