import { Text, Id, Url } from "./base";

export type Episode = {
  id: Id;
  name: Text;
  air_date: Text;
  episode: Text;
  characters: Url[];
  url: Url;
  created: Text;
};
