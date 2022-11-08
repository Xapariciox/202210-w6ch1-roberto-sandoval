import { mockCharacterTestApi } from '../../model/mockCharacter';

import {
    createCharacter,
    deleteCharacters,
    getMyApi,
    updateCharacter,
} from './local.api';

describe('Given the local.Api fucntions', () => {
    describe('when we called api service....', () => {
        test('should create 1 Item', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(mockCharacterTestApi),
            });
            const result = await createCharacter(mockCharacterTestApi);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockCharacterTestApi);
        });

        test('Then if I use delete it should ...', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn(),
            });
            await deleteCharacters(1);
            expect(fetch).toHaveBeenCalled();
        });

        test('Then if I use updateCharacter it should add the partial.', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue('update'),
            });
            const result = await updateCharacter(4, mockCharacterTestApi);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe('update');
        });
        test('Should return array with data', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([]),
            });

            const result = await getMyApi();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
    });
});
