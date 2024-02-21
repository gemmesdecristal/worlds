import BASE_URL from "@/app/constants";

class CharacterObj {
    name: string;
    class_: string;

    constructor(name: string, class_: string) {
        this.name = name;
        this.class_ = class_;
    }
}

const fetchCharacterList = async (): Promise<Array<CharacterObj>> => {
    const response = await fetch(BASE_URL + "/character", { cache: "no-store" });
    const data = await response.json();
    return data.map((d: any): CharacterObj => new CharacterObj(d.name, d.class));
};

const CharacterListPage = async () => {
    const characterData = await fetchCharacterList();

    return (
        <div>
            <h1>Character List</h1>
            <ul>
                {characterData.map(character =>
                    <li>{character.name}</li>
                )}
            </ul>
        </div>
    );
};

export default CharacterListPage;
