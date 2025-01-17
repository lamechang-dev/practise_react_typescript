export {};

interface Shape {
  readonly name: string;
  getArea(): number;
}

interface Quadrangle {
  sideA: number;
  sideB?: number;
  sideC?: number;
  sideD?: number;
}

class Rectangle implements Shape, Quadrangle {
  readonly author: string = "Jhon";
  readonly name: string = "rectangle";
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = (): number => {
    const result: number = this.sideA * this.sideB;
    return result;
  };
}

const rect = new Rectangle(6, 5);
console.log(rect.getArea());
