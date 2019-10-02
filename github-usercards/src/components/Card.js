import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Card = (user) => {
    console.log("user.login passed to Card:\n", user.user);
    return (
        <div className="card">
            <img
                alt={`${user.user.login}'s profile picture`}
                src={user.user.avatar_url}
            />
            <h3>{user.user.login}</h3>
            <p>URL: {user.user.html_url}</p>

        </div>
    );
}

export default Card;