import React, { useMemo } from 'react';
import { HeroListProps } from "../domain/models";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";



export const HeroList = ({publisher} : HeroListProps) => {

    const heroesByPublisher = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
      <div className="row rows-cols-1 row-cols-md-3 g-3">
          {heroesByPublisher.map(hero => <HeroCard key={hero.id} {...hero}/>)}
      </div>
    )
}


