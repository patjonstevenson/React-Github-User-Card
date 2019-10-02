import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import CardList from "./components/CardList";
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      handle: "",
      user: {},
      haveUser: false,
      followers: [],
      haveFollowers: false
    };
  }

  handleChanges = e => {
    this.setState({
      handle: e.target.value
    });
  }

  fetchUser = e => {
    e.preventDefault();
    console.log(this.state.handle);
    axios
      .get(`https://api.github.com/users/${this.state.handle}`)
      .then(res => {
        console.log(res);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log("Error getting user information:\n", err));

  }
  fetchFollowers = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.handle}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          followers: res.data,
          haveFollowers: true
        });
      })
      .catch(err => console.log("Error getting followers:\n", err));
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.setState({
        haveUser: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>
        <form onSubmit={this.fetchUser}>
          <input
            type="text"
            value={this.state.handle}
            placeholder="Enter user's GitHub handle."
            onChange={this.handleChanges} />
          <input type="submit" value="Get User" />
        </form>
        {
          this.state.haveUser
            ? (
              <>
                <h2>User</h2>
                <Card key={this.state.user.id} user={this.state.user} />
                <button onClick={this.fetchFollowers}>See Followers</button>
              </>
            )
            : <></>
        }

        {
          this.state.haveFollowers
            ? (
              <>
                <h2>Followers</h2>
                {this.state.followers.map(follower => <Card key={follower.id} user={follower} />)}
              </>
            )
            : <></>
        }
      </div>
    );
  }

}

export default App;
