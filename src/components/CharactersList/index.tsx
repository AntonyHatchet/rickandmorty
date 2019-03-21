import * as React from "react";
import { Characters, Character } from "../../types/characters";
import CharacterCard from "../CharacterCard";
import "./style.scss";

interface CharactersListType {
  characters: Characters;
}
const CharactersList = (props: CharactersListType) => {
  return (
    <div>
      <div className="characters_list">
        {props.characters &&
          props.characters.map((item: Character) => (
            <CharacterCard key={item.id} data={item} />
          ))}
      </div>
    </div>
  );
};

export default CharactersList;
