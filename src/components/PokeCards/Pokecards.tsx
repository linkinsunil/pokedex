import './PokeCards.css';
import React from "react";

const PokeCards = (props: any) => {
    return(
        <div className="pokecard">
            {/* Pokemon Image Here */}
            <p>{props.name}</p>
        </div>
    )
}

export default PokeCards;