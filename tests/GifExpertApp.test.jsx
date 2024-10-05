import { render, screen } from "@testing-library/react"
import {GifExpertApp} from '../src/GifExpertApp'
describe('tests in <GifExpertApp/>', () => { 
    test('should first', () => { 
       render(<GifExpertApp/>);
       screen.debug();
       //tarea:
       //evaluar la funcionalidad onaddcategory 
       //que pasaria si vuelvo a mandar la misma categoria, que pasaria si mando una diferente
       //que pasa si escribimos en el input
       //que pasa si le damos submit al form
    
    });    
})