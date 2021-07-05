import React, { Component} from "react";

export default class Card extends Component {
    render() {
        return(
            <div style={{"border": "solid 1px black", "padding": "10px", "margin": "10px", "maxWidth": "300px", "maxHeight": "600px", "fontSize": "10px"}}>
                <div style={{"fontWeight": "bold", "fontSize": "20px"}}>{this.props.name}</div>
                <div style={{"textAlign": "center", "padding": "20px"}}>
                    <img style={{"borderRadius": "5%", "maxWidth": "200px", "maxHeight": "200px"}} src={this.props.image} alt={this.props.name}/>
                </div>
                <div>
                    <span style={{"fontWeight": "bold"}}>Type: </span> {this.props.type}
                </div>
                <div>
                    <span style={{"fontWeight": "bold"}}>Weakness: </span> {this.props.weakness}
                </div>
                {this.props.ability != null && 
                    <div style={{"borderBottom": "solid 1px black", "borderTop": "solid 1px black" }}>
                        <span style={{"fontWeight": "bold"}}>Ability: </span> {this.props.ability.name}
                        <div>
                            <span style={{"fontWeight": "bold"}}>Effect: </span> {this.props.ability.effect}
                        </div>
                    </div>}
                {this.props.attacks.map(attack => 
                    <div key={attack._id} style={{"borderBottom": "solid 1px black", "borderTop": "solid 1px black" }}>
                        <span style={{"fontWeight": "bold"}}>Attack: </span> {attack.name} - 
                        <span style={{"fontWeight": "bold"}}> Cost: </span> {attack.cost}
                        <div>
                            <span style={{"fontWeight": "bold"}}>Effect: </span> {attack.effect}
                        </div>
                        <span style={{"fontWeight": "bold"}}>Damage: </span> {attack.damage}
                    </div> 
                )}
            </div>
        )
    }
}