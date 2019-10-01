import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

class CardList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card-list">
                {this.props.users.map(user => (
                    <Card user={user} />
                ))}
            </div>
        );
    }
}

export default CardList;