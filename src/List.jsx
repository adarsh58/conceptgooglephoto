import React from "react";

const List = (props) => {

  return (
    <div>
      <ul>
        {props.item.urls.map((i) => {
          return (
            <li key={i.url}>
              <a href={i.Url}>{i.thumbnailUrl}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
