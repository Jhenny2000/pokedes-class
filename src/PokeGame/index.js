import React, {Component} from 'react'

import Pokedex from '../Pokedex'

class PokeGame extends Component {

    constructor(props){
        super(props);

        // this.props = pega todos os componentes q tem e q vc criou na class
        // para ter acesso a uma variavel dentro da state (this.state.variavel)
        // o construtor pode ter só uma state, denro dela pode ter variaveis
        this.state = {
            list:  [
                {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
                {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
                {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
                {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
                {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
                {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
                {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
                {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}

            ],
            hand1: [
                {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
                {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
                {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
                {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
            ],
            hand2 :[],

            teste : [this.setState(this.state.list.length.slice(0, 4))]
            
        }


    }

  


    render() {
        return (

            <>
                <Pokedex pokemons={this.state.hand1}/>
                {/* <Pokedex pokemons={this.state.hand2}/> */}
            </>
        );
    }
}

export default PokeGame;