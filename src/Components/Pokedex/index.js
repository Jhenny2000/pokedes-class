import React from "react";
import { Component } from "react/cjs/react.production.min";
import Card from "../Card";
import '../Card/style.css'

class Pokedex extends Component{
    render(){
        return(
            <>
                <div className='containerCards'>
                    <div className='card'>
                        <div className='namePoke'>

                        </div>
                        <img className='imgPoke'/>
                        <div className='info'>
                            <div className='type'>

                            </div>
                            <div className='exp'>

                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='namePoke'>

                        </div>
                        <div className='img'>

                        </div>
                        <div className='info'>

                        </div>
                    </div>
                    <div className='card'>
                        <div className='namePoke'>

                        </div>
                        <div className='img'>

                        </div>
                        <div className='info'>

                        </div>
                    </div>
                    <div className='card'>
                        <div className='namePoke'>

                        </div>
                        <div className='img'>

                        </div>
                        <div className='info'>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Pokedex;