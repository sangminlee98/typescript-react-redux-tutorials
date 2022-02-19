import axios from 'axios';

export const fetchPokemonData = async (pokemonName: string) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return res.data;
}