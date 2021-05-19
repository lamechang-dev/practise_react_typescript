const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
};

type PermsChar = keyof typeof permissions;
type PermsNum = typeof permissions[PermsChar];

const testNum: PermsNum = 1;

const species = ['rabbit', 'bear', 'fox', 'dog'] as const;
type Species = typeof species[number]; //'rabbit'|'bear'|'fox'|'dog'
