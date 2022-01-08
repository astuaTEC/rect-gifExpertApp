import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import React from 'react';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>);
    });
    
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });
    });

    test('NO debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        //simular el inputChange
        //simular el submit
        //setCategories se debe de haber llamado
        //el valor del input debe de estar vacio

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
        
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    
})
