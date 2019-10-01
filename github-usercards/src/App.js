import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from "./components/CardList";
import fetchUser from "./functions/fetchUser";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      handle: "",
      user: null,
      followers: []
    };
  }

  handleChange = e => {
    this.setState({ handle: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      user: fetchUser(`https://api.github.com/users/${this.state.handle}`)
    });
  }

  render() {
    return (

      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.user} onChange={this.handleChange} placeholder="Enter GitHub handle." />
          <button type="submit">Get User</button>
        </form>
        <CardList users={this.state.followers} />
      </div>
    );
  }
}

export default App;
