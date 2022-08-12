
export type ValidPublishers = 'DC Comics' | 'Marvel Comics';

export interface HeroListProps {
  publisher:ValidPublishers;
}

export interface Hero {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}