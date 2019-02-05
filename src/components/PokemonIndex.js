import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  // let API = 'http://localhost:3000/pokemon'

  state = {
    pokemon: [],
    filteredPokemon: []
  }
  
  componentDidMount(){
  fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({
        pokemon: data,
        filteredPokemon: data
      })
      )
    }
    
    handleSubmit = (event) => {
      event.preventDefault()
      const newPokeArr = [...this.state.pokemon]

      const newPokemon = {
        name: event.target.name.value,
        stats: [
          {
            value: event.target.hp.value,
            name: "hp"
          }
        ],
        sprites: {
          front: event.target.frontUrl.value,
          back: event.target.backUrl.value
        }
      }
      newPokeArr.push(newPokemon)

      this.setState({
        pokemon: newPokeArr
      })

      console.log(newPokemon)
      this.postPokemon(newPokemon)
    } 

    postPokemon = (pokemon) => {
      fetch(API, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(pokemon)
      }).then(resp => resp.json())
        .then(data => this.setState({
          pokemon: data
        }))
    }

    handleSearch = (event) => {
      event.preventDefault()
      // console.log(event.target.value)
      let searchTerm = event.target.value
      let foundPokemon = [...this.state.pokemon].filter(poke => poke.name.includes(searchTerm))
      console.log(foundPokemon)
      this.setState({
        filteredPokemon: foundPokemon
      })
    }
    
    render() {
      return (
        <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon} />
        <br />
        <PokemonForm pokemon={this.state.pokemon} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
