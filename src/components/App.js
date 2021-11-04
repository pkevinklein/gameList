import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import GameList from "./GameList";

export default class App extends Component {
  state = { games: [], searchedGames: [] };
  getAllGames = async () => {
    await axios
      .get("/games")
      .then((response) => {
        this.setState({ games: response.data.slice(0, 20) });
      })
      .catch((err) => console.log("API request error: ", err));
  };
  componentDidMount() {
    this.getAllGames();
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
