import React from "react";

function Entry(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label={props.name}>
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>{props.des}</dd>
        </div>
      </dl>
    </div>
  );
}
export default Entry;
