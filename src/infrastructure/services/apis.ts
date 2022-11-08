export function getApi(numPage: number) {
    const url = `https://rickandmortyapi.com/api/character?page=${numPage}`;
    return fetch(url).then((result) => result.json());
}

export function getApiDetails(url: string) {
    return fetch(url).then((result) => result.json());
}
