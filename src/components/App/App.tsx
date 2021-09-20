import React from 'react';
import { pokemonData } from '../../data/pokemonData';
import Pokedex from '../Pokedex/Pokedex';
import './App.css';

interface AppState {
    searchField: string,
    allPokemons: any,
    searchedPokemons: any,
    selectedPokemon: any
}

class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemons: [],
        searchedPokemons: [],
        selectedPokemon: undefined
    }

    componentDidMount () {
        const pokeData = pokemonData;
    }

    render() {
        return(
            <div className="App">
                <h1>Pokedex</h1>
                <Pokedex />
            </div>
        )
    }
}

export default App;