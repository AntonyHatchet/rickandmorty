import * as React from "react";
import { Character } from "../../types/characters";
import CardElement from "../CardElement";
import ActiveCardElement from "../../containers/ActiveCardElement";
import Location from "../../containers/Location";
import Episodes from "../../containers/Episodes";

import "./style.scss";

interface CharacterData {
  data: Character;
}

const CharacterCard = (props: CharacterData) => {
  return (
    <article className="card">
      <div className="card_header">
        <img className="card_header_cover_image" src={props.data.image} />
        <div className="card_header_text_block">
          <h2>{props.data.name}</h2>
          <span>
            id: {props.data.id} - created{" "}
            {new Date(props.data.created).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="card_body">
        <CardElement name="status" value={props.data.status} />
        <CardElement name="species" value={props.data.species} />
        <CardElement name="gender" value={props.data.gender} />
        {props.data.origin.url ? (
          <ActiveCardElement
            element={<Location url={props.data.origin.url} />}
            name="origin"
            value={props.data.origin.name}
          />
        ) : (
          <CardElement name="origin" value={props.data.origin.name} />
        )}
        {props.data.location.url ? (
          <ActiveCardElement
            element={<Location url={props.data.location.url} />}
            name="last location"
            value={props.data.location.name}
          />
        ) : (
          <CardElement name="last location" value={props.data.origin.name} />
        )}
        <Episodes id={props.data.id} urls={props.data.episode} />
      </div>
    </article>
  );
};

export default CharacterCard;
