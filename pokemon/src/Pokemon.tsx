import React from 'react';
import { PokemonType } from './modules/pokemon';

type Props = {
  pokemon: PokemonType
}
const Pokemon = ({pokemon}: Props) => {
  return (
    <div>
      <section>
        {pokemon.abilities.map(ability => {
          return <p key={ability.ability.name}>{ability.ability.name}</p>
        })}
      </section>
    </div>
    
  );
};

export default Pokemon;