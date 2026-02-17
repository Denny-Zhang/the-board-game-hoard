export function utilInterface(): string {
  return 'util-interface';
}

export interface Game {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
}
