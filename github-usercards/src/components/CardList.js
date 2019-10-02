import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import axios from "axios";

class CardList extends React.Component {
    constructor() {
        super();
        this.state = {
            followersHandles: []
        }
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/${this.props.userHandle}`)
            .then(res => {
                this.setState({
                    followers: res.data.map(follower => follower.login)
                });
            })
            .catch(err => console.log("Error in mounting CardList:\n", err));

    }

    render() {
        return (
            <div className="card-list">
                {this.state.followersHandles.map(follower => (
                    <Card userHandle={follower.login} />
                ))}
            </div>
        );
    }
}

export default CardList;