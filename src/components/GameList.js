import React, { Component } from "react";
import "./GameList.css";
import GameCard from "./GameCard";

export default class GameList extends Component {
  renderList(gamesList) {
    return gamesList.map((game) => {
      return <GameCard className="ui card" key={game.id} game={game} />;
    });
  }
  render() {
    return (
      <div className="">
        <h2 className="">Games</h2>
        <div className="ui celled game-list">
          {this.props.searchedList.length === 0
            ? this.renderList(this.props.initialGameList)
            : this.renderList(this.props.searchedList)}
        </div>
      </div>
    );
  }
}
