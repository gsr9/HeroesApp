import { heroes } from "../data/heroes";
import { Hero } from "../domain/models";


export const getHeroById = (id: string |undefined): Hero | undefined => {
  return heroes.find(hero => hero.id === id);
}