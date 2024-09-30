import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('Tests in <AddCategory/>', () => { 
    test('should change input text value ', () => { 
        render(<AddCategory onAddCategory={()=>{}}/>); //creamos el sujeto de pruebas
        const input = screen.getByRole('textbox'); //buscamos el elemento
        fireEvent.input(input, {target: {value: 'Saitama'} });//disparamos el evento del elemento
        expect(input.value).toBe('Saitama');//hacemos la asercion
        //screen.debug();      
    });
    test('should call onAddCategory if the input has value', () => { 
        const inputValue = 'Saitama';
        render(<AddCategory onAddCategory={()=>{}}/>); 
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 
        fireEvent.input(input, {target: {value: 'Saitama'} });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        screen.debug();
    });
})