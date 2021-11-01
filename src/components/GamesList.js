import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { Router, Route, Switch } from "react-router-dom";
export default class GamesList extends Component {
  renderList() {
    return this.props.gameslist.map((game) => {
      return (
        <div className="item" key={game.id}>
          <Router>
            {/* {this.renderAdmin(game)} */}
            <i className="large middle aligned icon gamepad" />
            <div className="content">
              <Link
                to={game.freetogame_profile_url}
                target="_blank"
                className="header"
              >
                {game.title}
              </Link>
              <img
                alt={game.title}
                className="left floated content"
                src={game.thumbnail}
              />
              <div className="description">{game.short_description}</div>
            </div>
          </Router>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Games</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {/* {this.renderCreate()} */}
      </div>
    );
  }
}
