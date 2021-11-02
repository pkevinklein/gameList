import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import GameList from "./GameList";

export default class App extends Component {
  state = { games: [], searchedGames: [] };

  componentDidMount() {
    axios
      .get("https://www.freetogame.com/api/games")
      .then((response) => {
        this.setState({ games: response.data });
      })
      .catch((err) => console.log("API request error: ", err));
  }

  onSearchSubmit = (term) => {
    let search = this.state.games.filter(
      (game) => game.title.toLowerCase().includes(term.toLowerCase()) && game
    );
    this.setState({ searchedGames: search });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar greeting="hello" onSubmit={this.onSearchSubmit} />
        <GameList
          initialGameList={this.state.games}
          searchedList={this.state.searchedGames}
        />
      </div>
    );
  }
}
