import './Pokelist.css';
import React from 'react';
import PokeCards from '../PokeCards/Pokecards';

const Pokelist = () => {
    return (
        <div className="pokelist">
            <PokeCards name='Pikachu' />
            <PokeCards name='bulbasaur' />
            <PokeCards name='ivysaur' />
            <PokeCards name='venasaur' />
            <PokeCards name='charizard' />
        </div>
    )
}

export default Pokelist
