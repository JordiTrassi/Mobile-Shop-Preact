import { render, screen } from '@testing-library/preact';
import { h } from 'preact';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IsLoading } from "../../src/components/IsLoading";
import { store } from '../../src/store/store'

describe('Pruebas en el componente <IsLoading />', () => {

    test('Debe de hacer match con el snapshot', () => {
        
        const { container } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <IsLoading />
                </Provider>
            </BrowserRouter> 
        );

        expect(container).toMatchSnapshot();
    });

    
})
