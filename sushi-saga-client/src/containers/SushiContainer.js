import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi) => {
          return (
            <div key={sushi.id}>
              <h4>{sushi.name}</h4>
              <img src={sushi.img_url} alt={sushi.name} width="100%" />
            </div>
          );
        })}
        <MoreButton />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
