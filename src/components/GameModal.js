import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import ImageCarousel from "./ImageCarousel";
import axios from "axios";

function GameModal(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`/game?id=${props.game.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log("get game by id error", err));
  }, []);
  const {
    thumbnail,
    title,
    release_date,
    platform,
    genre,
    developer,
    short_description,
    freetogame_profile_url,
    screenshots,
    description,
    id,
  } = data;

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className="ui">Show More</Button>}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Game description</Header>
          <p className="description">
            <b>In a nutshell:</b> {short_description}
          </p>
          {/* <p className="description">{description}</p> */}
          <p>
            <b>Release Date:</b> {release_date}
          </p>
          <p>
            <b>Platform:</b> {platform}
          </p>
          <p>
            <b>Genre:</b> {genre}
          </p>
          <p>
            <b>Developer:</b> {developer}
          </p>
          <ImageCarousel screenshots={screenshots} size="large" wrapped />
          {/* <Image size="large" src={thumbnail} wrapped /> */}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="green"
          target="_blank"
          rel="noreferrer"
          href={freetogame_profile_url}
          labelPosition="right"
          icon="gamepad"
          content="Click here to play!"
        />
        {/* <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        /> */}
      </Modal.Actions>
    </Modal>
  );
}

export default GameModal;
