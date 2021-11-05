import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import GameModal from "./GameModal";

export default class GameCard extends Component {
  render() {
    const { short_description, thumbnail, title } = this.props.game;
    return (
      <div className="large middle aligned">
        <h3 className="header">{title}</h3>
        <Grid>
          {/* <Grid.Row streched> */}
          <Grid.Column textAlign="center">
            <Segment>
              <img
                className="image-hover"
                alt={short_description}
                src={thumbnail}
              />
              <div className="grey inverted segment description">
                {short_description}
              </div>
              <GameModal
                onClick={this.getSpecificGame}
                game={this.props.game}
              />
            </Segment>
          </Grid.Column>
          {/* </Grid.Row> */}
        </Grid>
      </div>
    );
  }
}
