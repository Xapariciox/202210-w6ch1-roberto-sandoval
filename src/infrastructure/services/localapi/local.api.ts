import { Character } from '../../model/interface';

const URL = 'https://servidor-mrsmeeseeks-production.up.railway.app/Favorites';

export function getMyApi() {
    const myApiUrl =
        'https://servidor-mrsmeeseeks-production.up.railway.app/Favorites';
    return fetch(myApiUrl).then((result) => result.json());
}

export function createCharacter(character: Character) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(character),
        headers: {
            'content-type': 'application/json',
        },
    }).then((Response) => Response.json());
}
export function deleteCharacters(id: number) {
    return fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });
}
export function updateCharacter(
    id: number,
    partialCharacter: Partial<Character>
) {
    return fetch(`${URL}/${id}`, {
        method: 'PATH',
        body: JSON.stringify(partialCharacter),
        headers: {
            'content-type': 'application/json',
        },
    }).then((response) => response.json());
}
