import { useState } from "react";
import List from "./List";
const Album = (props) => {
  const [showthumb, setshowthumb] = useState(false);
  const handleAlbumCLick = (id) => {
    if (!showthumb) {
      setshowthumb(true);
    } else {
      setshowthumb(false);
    }
  };
  return (
    <div>
      <div
        style={{ cursor: "pointer" }}
        onClick={handleAlbumCLick}
      >{`Album ID ${props.item.albumId}`}</div>
      {showthumb && <List item={props.item} id={props.item.albumId} />}
    </div>
  );
};

export default Album;
