import { fetchPokemonData } from './../api/pokemonData';
import { RootState } from './index';
import { AxiosError } from 'axios';
import {ActionType, createAsyncAction, createReducer} from 'typesafe-actions';
import {ThunkAction} from 'redux-thunk';

export const POKEMON = 'POKEMON';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
export const POKEMON_FAILURE = 'POKEMON_FAILURE';

type Ability = {
  ability: {
    name: string,
    url: string
  },
  is_hidden: boolean,
  slot: number
}
type Sprites = {
  front_default: string
}
type PokemonData = {
  abilities: Ability[],
  sprites: Sprites
};
export type PokemonType = {
  abilities: Ability[],
  sprites: Sprites
}

export const getPokemonDataAsync = createAsyncAction(
  POKEMON,
  POKEMON_SUCCESS,
  POKEMON_FAILURE
)<undefined, PokemonData, AxiosError>();

export type PokemonDispatchType = ActionType<typeof getPokemonDataAsync>;
export function getPokemonDataThunk(pokemonName: string): ThunkAction<Promise<void>, RootState, null, PokemonDispatchType> {
  return async dispatch => {
    const {request, success, failure} = getPokemonDataAsync;
    dispatch(request());
    try {
      const pokemonData = await fetchPokemonData(pokemonName);
      dispatch(success(pokemonData));
    } catch (e) {
      dispatch(failure(e as AxiosError));
    }
  }
};

type InitialState = {
  loading: boolean,
  success: boolean,
  pokemon?: PokemonType | null,
  error?: Error | null
};

const initialState: InitialState = {
  loading: false,
  success: false,
  pokemon: null,
  error: null
};

const pokemon = createReducer<InitialState, PokemonDispatchType>(initialState, {
  [POKEMON]: state => ({
    ...state,
    loading: true,
    pokemon: null,
    error: null
  }),
  [POKEMON_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    success: true,
    pokemon: action.payload
  }),
  [POKEMON_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  })
});

export default pokemon;