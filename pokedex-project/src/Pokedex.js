import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner">YOU WIN!</h1>;
        } else {
            title = <h1 className="Pokedex-loser">YOU LOSE!</h1>;
        }
        return(
            <div className="Pokedex">
                {title}
                <h4>Experience: {this.props.exp}</h4>
                {/* <p className={this.props.isWinner ? "Pokedex-winner" : "Pokedex-loser"}>
                    {this.props.isWinner ? 'WINNER!' : 'LOSER!'}</p> */}
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard 
                            id ={p.id} 
                            name={p.name} 
                            type= {p.type}
                            exp={p.base_experience}
                        />
                    ))}
                </div>                
            </div>
        )
    }
}

export default Pokedex;