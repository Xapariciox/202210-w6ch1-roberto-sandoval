import { getApi, getApiDetails } from './apis';

describe('Given api function', () => {
    test('Should return array with data', async () => {
        global.fetch = jest
            .fn()
            .mockResolvedValue({ json: jest.fn().mockResolvedValue([]) });

        const result = await getApi(1);
        expect(fetch).toHaveBeenCalled();
        expect(result).toEqual([]);
    });
    test('Should return array with data with details', async () => {
        global.fetch = jest
            .fn()
            .mockResolvedValue({ json: jest.fn().mockResolvedValue([]) });

        const result = await getApiDetails('');
        expect(fetch).toHaveBeenCalled();
        expect(result).toEqual([]);
    });

    //PROBANDO FALSOS POSITIVOS.
    // test('Should return array with String ', async () => {
    //     global.fetch = jest
    //         .fn()
    //         .mockResolvedValue({ json: jest.fn().mockResolvedValue([]) });

    //     const result = await getApi();
    //     expect(fetch).toHaveBeenCalled();
    //     expect(result).toEqual('');
    // });
});
