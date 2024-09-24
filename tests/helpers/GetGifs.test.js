import { getGifs } from "../../src/helpers/GetGifs";

describe('Pruebas en GetGifs()', () => { 
    test('should return array of gifs by category', async() => { 
        const category = 'dragon ball';
        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    })
})