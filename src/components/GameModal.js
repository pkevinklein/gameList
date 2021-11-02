import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function GameModal(props) {
  const [open, setOpen] = React.useState(false);
  const {
    short_description,
    thumbnail,
    genre,
    platform,
    title,
    developer,
    release_date,
    freetogame_profile_url,
  } = props.game;
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className="ui number">Show More</Button>}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content image>
        <Image size="large" src={thumbnail} wrapped />
        <Modal.Description>
          <Header>Game description</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Release Date: {release_date}</p>
          <p>Platform: {platform}</p>
          <p>Genre: {genre}</p>
          <p>Developer: {developer}</p>
          <p className="description">In a nutshell: {short_description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <a
          color="black"
          target="_blank"
          rel="noreferrer"
          href={freetogame_profile_url}
        >
          Click here to play!
        </a>
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
