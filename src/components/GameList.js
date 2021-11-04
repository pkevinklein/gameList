import React, { Component } from "react";
import "./GameList.css";
import GameCard from "./GameCard";

export default class GameList extends Component {
  renderList(gamesList) {
    return gamesList.map((game) => {
      return <GameCard className="scale-in-center" key={game.id} game={game} />;
    });
  }
  render() {
    return (
      <div>
        <h2>Games</h2>
        <div className="ui celled list game-list">
          {this.props.searchedList.length === 0
            ? this.renderList(this.props.initialGameList)
            : this.renderList(this.props.searchedList)}
        </div>
      </div>
    );
  }
}
