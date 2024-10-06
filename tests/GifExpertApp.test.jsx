import { fireEvent, render, screen } from "@testing-library/react"
import {GifExpertApp} from '../src/GifExpertApp'

describe('tests in <GifExpertApp/>', () => { 
    const inputValue = "dragon ball";
    test('should add category to the grid', () => { 
       render(<GifExpertApp/>);
       const input = screen.getByRole('textbox');
       const form = screen.getByRole('form');
       fireEvent.input(input, {target: {value: inputValue}} );
       fireEvent.submit(form);
       //screen.debug();
       expect(screen.getByText(inputValue)).toBeTruthy();
    });   
    test('should not add category if already exists', () => { 
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}} );
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: inputValue}} );
        fireEvent.submit(form);
        expect(screen.getAllByText(inputValue).length).not.toBeGreaterThan(1);
        //screen.debug();
    }); 
    test('should find images on load', async() => { 
        render(<GifExpertApp/>);
        // setTimeout(() => {
        //     screen.debug();
        // }, 5000);
       //como esperar a que carguen las imagenes, mas adelante se vera como se haceq
    });
})