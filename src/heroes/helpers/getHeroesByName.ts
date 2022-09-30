import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
  const nameCleared = name.toLowerCase().trim();

  return heroes.filter(h => h.superhero.toLowerCase().includes(nameCleared));
}