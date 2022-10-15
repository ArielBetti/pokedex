import { TPokemonType } from "../../../interface";

export interface ICardProps {
  id: number;
  image: string;
  name: string;
  preview?: string;
  type: TPokemonType;
}
