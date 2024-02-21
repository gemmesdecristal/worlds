import BASE_URL from "@/app/constants";

class CharacterObj {
  name: string;
  class_: string;

  constructor(name: string, class_: string) {
    this.name = name;
    this.class_ = class_;
  }
}

const fetchCharacter = async () => {
  const response = await fetch(BASE_URL + "/character/65d3c0ebf7d045e318a8cf18", { cache: "no-store" }); //TODO: get character id from somewhere
  const data = await response.json();
  console.log(data);
  return new CharacterObj(data.name, data.class);
};

export const Character = async () => {
  const characterData = await fetchCharacter();

  return (
    <div>
      <h1>Character Information</h1>
      <ul>
        <li>name: {characterData.name}</li>
        <li>class: {characterData.class_}</li>
      </ul>
    </div>
  );
};

export default Character;
