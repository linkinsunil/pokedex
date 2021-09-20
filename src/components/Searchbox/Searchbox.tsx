import './Searchbox.css';

interface SearchboxProps {
    onInputChange: (inputValue: string) => void;
}

const Searchbox = (props: SearchboxProps) => {
    return(
        <input
            onChange={(e) => {
                props.onInputChange(e.target.value)                
            }}
            type="search"
            className="search"
            placeholder="Search Pokemons"
        />
    )
}

export default Searchbox;