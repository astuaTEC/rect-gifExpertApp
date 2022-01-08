import { getGifts } from "../../helpers/getGifs"


describe('Pruebas con getGifs Fetch', () => {
    
    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifts('Dragon ball');

        expect(gifs.length).toBe(10);
    });

    test('debe de traer 0 elementos cuando no se envia argumentos', async() => {
        const gifs = await getGifts('');

        expect(gifs.length).toBe(0);
    });
    
})
