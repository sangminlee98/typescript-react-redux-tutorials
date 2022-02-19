import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './modules';
import { getPokemonDataThunk } from './modules/pokemon';
import Pokemon from './Pokemon';

function App() {
  const {loading, pokemon, error} = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const onSubmitPokemon = (pokemonName: string) => {
    dispatch(getPokemonDataThunk(pokemonName));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitPokemon(input);
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} placeholder='포켓몬 이름을 입력하세요' />
        <button type='submit'>조회</button>
      </form>
      <hr />
      {
        loading && <p>로딩중</p>    
      }
      {
        error && <p>에러발생</p>
      }
      {
        pokemon && <Pokemon pokemon={pokemon}/>
      }
    </div>
  );
}

export default App;
