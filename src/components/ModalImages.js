import React from "react";
import { Image } from "semantic-ui-react";

export default function ModalImages({ screenshots }) {
  const [data, setData] = React.useState([{ image: "hello" }]);
  //   setData(screenshots);
  const images = data.map((screenshot) => {
    return (
      <>
        <Image src={screenshot.image} />
      </>
    );
  });
  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  return <div className="card">{images}</div>;
}
