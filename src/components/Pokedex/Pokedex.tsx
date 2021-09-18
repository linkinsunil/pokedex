import React from 'react';
import './Pokedex.css';

const Pokedex = () => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <p>List of Pokemon</p>
            </div>
            <div className="pokesearchresult-container">
                <p>Poke Search Results</p>
            </div>
        </div>
    )
}

export default Pokedex
