import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('tests in <GifGrid />', () => { 
    const category = 'Dragon Ball';
    test('should show isloading at the begining', async() => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });
        render(<GifGrid category ={category}/>); 
        expect(await screen.findByText('Cargando...'));
        const categoryvalue = await screen.findByText(category);
        expect(categoryvalue); //???
        //screen.debug();
    });  
    test('should items when images are loaded by useFetchGif', async() => { 
        useFetchGifs.mockReturnValue({
            images:[
                {
                    id:'ABC',
                    title:'Goku',
                    url:'htttp://localhost/gokuimage'
                },
                {
                    id:'123',
                    title:'saitama',
                    url:'htttp://localhost/saitamaimage'
                }
            ],
            isLoading: false
        });
        render(<GifGrid category ={category}/>);  
        //screen.debug();
        expect((await screen.findAllByRole('img')).length).toBe(2);
    });  
});