import React from 'react';
import './PokeSearchResult.css';

const PokeSearchResult = () => {
    const selectedPokemon = false;

    return (
        <div className="poke-result-card">
            {
                selectedPokemon ? (
                    <div>
                        {/* Add the image here */}
                        <p>Name: Pikachu</p>
                        <p>Id: Some id</p>
                        <p>Height: Some height</p>
                        <p>Weight: Some weight</p>
                        <p>Base Exp: 100xp</p>
                    </div>
                ) : (
                    <h2>Welcome to Pokedex</h2>
                )
            }
        </div>
    )
}

export default PokeSearchResult
