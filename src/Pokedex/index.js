import React from 'react';
import { Component } from 'react';
import Card from '../Card';

class Pokedex extends Component{
    // constructor(props){
    //     super(props)
       
    // }

    render(){

        return(
            <>
                <div className='containerCards'>
                    {
                        this.props.pokemons.map((pokemon) => {
                            return <Card  pokemon={pokemon} />
                        })
                    }
                </div>
            </>
        )
    }
}

export default Pokedex;