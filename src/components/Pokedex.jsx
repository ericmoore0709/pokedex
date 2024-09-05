import PropTypes from 'prop-types';
import './pokedex.css';
import defaultData from '../assets/defaultData';
import Pokecard from './Pokecard';

export default function Pokedex({ pokemon = defaultData }) {

    const cards = pokemon.map(x => <Pokecard id={x.id} key={x.id} name={x.name} type={x.type} />);

    return (
        <div className="container pokedex-container">
            {cards}
        </div>
    )
};

Pokedex.propTypes = {
    pokemon: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ),
};