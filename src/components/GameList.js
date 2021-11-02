import React, { Component } from "react";
import "./GameList.css";
import GameCard from "./GameCard";

export default class GameList extends Component {
  renderList(gamesList) {
    return gamesList.map((game) => {
      return (
        <GameCard key={game.id} game={game} />
        // <div className="item" key={game.id}>
        //   {/* {this.renderAdmin(game)} */}
        //   {/* <i className="large middle aligned icon gamepad" /> */}
        //   {/* <div className="ui number">{game.id}</div> */}
        //   <div className="content">
        //     <a
        //       href={game.freetogame_profile_url}
        //       target="_blank"
        //       className="header"
        //       rel="noreferrer"
        //     >
        //       {game.title}
        //     </a>
        //     <img
        //       alt={game.title}
        //       className="left floated content"
        //       src={game.thumbnail}
        //     />
        //     <div>
        //       <div className="genre">Genre: {game.genre}</div>
        //       <div className="publisher">Release Date: {game.release_date}</div>
        //       <div className="developer">Developer: {game.developer}</div>
        //       <div className="platform">Platform: {game.platform}</div>
        //     </div>
        //     <div className="description">{game.short_description}</div>
        //   </div>
        // </div>
      );
    });
  }
  render() {
    console.log(this.props);
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
