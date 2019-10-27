export class Chinchilla {
  key: string;
  text: string;
  costs: {
    male: {
      usual: number,
      bronze: number,
      silver: number,
      gold: number
    },
    female: {
      usual: number,
      bronze: number,
      silver: number,
      gold: number
    }
  };
  images: Array<string>;
}
