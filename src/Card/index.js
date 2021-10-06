// import React, { useState } from "react";
import { Component } from "react/cjs/react.production.min";
import './style.css'

class Card extends Component{ 
    constructor(props){
        super(props)

        this.state = {
            pokemons : [
                {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
                {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
                {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
                {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
                {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
                {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
                {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
                {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},

            ], 

            hand1: [],
            hand2: []


        }
    }

    // componentDidMount(){
    //    this.setState({
    //        hand1: 'Mao ZzZzZZz'
    //    })
    // }

    render(){       
        // console.log('Renderizar')
        return(

            <>
                <div className='containerCards'>
                    {this.state.pokemons.map((pokemon)=>(
                        <>
                            <div className='card'>
                                <div className='namePoke'>
                                    <h2>{pokemon?.name}</h2>
                                </div>
                                <img className='imgPoke' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
                                <div className='info'>
                                    <div className='type'>
                                        <p>Type: {pokemon?.type}</p>
                                    </div>
                                    <div className='exp'>
                                        <p>EXP: {pokemon?.base_experience}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </>
        )
    }
}

export default Card;