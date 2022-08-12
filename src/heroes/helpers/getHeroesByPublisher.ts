import { heroes } from "../data/heroes";
import { ValidPublishers } from "../domain/models";



export const getHeroesByPublisher = (publisher: ValidPublishers) => {
  return heroes.filter(hero => hero.publisher === publisher);
}