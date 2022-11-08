export interface ApiObject {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string | null;
    };
    results: Array<Character>;
}
export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    episode: string[]; // Aray<string>
    url: string;
    created: string;
}
