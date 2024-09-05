import PropTypes from 'prop-types';
import './pokedex.css';

export default function Pokecard({ id, name, type }) {

    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    const typeColorMap = {
        'fire': { backgroundColor: 'orange', color: 'white' },
        'water': { backgroundColor: 'blue', color: 'white' },
        'electric': { backgroundColor: 'yellow', color: 'grey' },
        'bug': { backgroundColor: 'lime', color: 'grey' },
        'flying': { backgroundColor: 'lightblue', color: 'white' },
        'poison': { backgroundColor: '#9900FF', color: 'white' },
        'normal': { backgroundColor: 'lightgrey', color: 'white' }
    }

    return (
        <div className="container pokecard-container">
            <div className='pokename'><strong>{name}</strong></div>
            <img src={imgSrc} />
            <div><span className='poketype' style={typeColorMap[type] || { backgroundColor: 'white', color: 'black' }}>{type}</span></div>
        </div>
    );
}

Pokecard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};