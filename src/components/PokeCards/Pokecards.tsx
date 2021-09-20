import './PokeCards.css';

interface PokecardsProps{
    spriteUrl?:string;
    name:string;
    onPokemonClick: (pokemonName: string) => void;
}

const PokeCards = ({spriteUrl, name, onPokemonClick}: PokecardsProps) => {
    return(
        <div onClick={() => onPokemonClick(name)} className="pokecard">
            {/* Pokemon Image Here */}
            <img src={spriteUrl} alt="pokemon" className="pokemon-sprite" />
            <p>{name}</p>
        </div>
    )
}

export default PokeCards;