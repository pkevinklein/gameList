import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import GameModal from "./GameModal";

export default class GameCard extends Component {
  render() {
    const { short_description, thumbnail, title } = this.props.game;
    return (
      <div className="large middle aligned">
        <h3>{title}</h3>
        <Grid>
          <Grid.Column textAlign="center">
            <img alt={short_description} src={thumbnail} />
            <div className="description">{short_description}</div>
            <GameModal game={this.props.game} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
