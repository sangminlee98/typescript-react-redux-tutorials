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
          return (<div key={ability.ability.name}>
            <p>{ability.ability.name}</p>
            <img src={pokemon.sprites.front_default} alt="img" />
          </div>)
        })}
      </section>
    </div>
    
  );
};

export default Pokemon;