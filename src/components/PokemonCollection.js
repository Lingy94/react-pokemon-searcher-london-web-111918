import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

// class PokemonCollection extends React.Component {
  // render() {
  const PokemonCollection = (props) => {
    return (
      <Card.Group itemsPerRow={6}>
        {props.pokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
      </Card.Group>
    )
  }
// }

export default PokemonCollection
