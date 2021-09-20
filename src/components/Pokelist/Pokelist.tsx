import './Pokelist.css';
import PokeCards from '../PokeCards/Pokecards';
import { PokemonSchema } from "../../types/PokemonSchema";

interface PokelistProps{
    searchedPokemons: PokemonSchema[];
    onPokemonClick: (pokemonName: string) => void;
}

const Pokelist = ({ searchedPokemons, onPokemonClick }: PokelistProps) => {
    return (
        <div className="pokelist">
            {
                searchedPokemons.map((pokemon)=>{
                    return (
                        pokemon.name &&
                        <PokeCards
                            onPokemonClick={onPokemonClick}
                            key={pokemon.id}
                            name={pokemon.name}
                            spriteUrl={pokemon.sprites.normal} 
                        />
                    )
                })
                // searchedPokemons.map((pokemon)=>{
                //     return (
                //         <PokeCards
                //             key={pokemon.id}
                //             name={pokemon.name}
                //             spriteUrl={pokemon.sprites.normal} 
                //         />
                //     )
                // })

                //Same code as above but de-structured
                // searchedPokemons.map(({ id, name, sprites }) => {
                //     return (
                //         <PokeCards
                //             key={id}
                //             name={name}
                //             spriteUrl={sprites.normal}
                //         />
                //     )
                // })
            }
        </div>
    )
}

export default Pokelist
