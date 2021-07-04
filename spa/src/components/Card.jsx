import React, { Component} from "react";

export default class Card extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <div style={{"border": "solid 1px black", "padding": "20px", "margin": "20px", "max-width": "300px", "max-height": "600px", "font-size": "10px"}}>
                <div style={{"font-weight": "bold", "font-size": "20px"}}>{this.props.name}</div>
{/*                 <div style={{"text-align": "center", "padding": "20px"}}>
                    <img style={{"border-radius": "5%", "max-width": "200px", "max-height": "200px"}} src={this.props.image} alt={this.props.name}/>
                </div> */}
                <div>
                    <span style={{"font-weight": "bold"}}>Type: </span> {this.props.type}
                </div>
                <div>
                    <span style={{"font-weight": "bold"}}>Weakness: </span> {this.props.weakness}
                </div>
                <div style={{"border-bottom": "solid 1px black", "border-top": "solid 1px black" }}>
                    <span style={{"font-weight": "bold"}}>Ability: </span> {this.props.ability.name}
                    <div>
                        <span style={{"font-weight": "bold"}}>Effect: </span> {this.props.ability.effect}
                    </div>
                </div>
                {this.props.attacks.map(attack => 
                    <div style={{"border-bottom": "solid 1px black", "border-top": "solid 1px black" }}>
                        <span style={{"font-weight": "bold"}}>Attack: </span> {attack.name} - 
                        <span style={{"font-weight": "bold"}}> Cost: </span> {attack.cost}
                        <div>
                            <span style={{"font-weight": "bold"}}>Effect: </span> {attack.effect}
                        </div>
                        <span style={{"font-weight": "bold"}}>Damage: </span> {attack.damage}
                    </div> 
                )}
            </div>
        )
    }
}