import '@testing-library/jest-dom';
import { h } from 'preact';
import { Provider } from 'react-redux';
import { render } from '@testing-library/preact';
import { PhoneCard } from '../../src/components/PhoneCard';
import { store } from '../../src/store/store'
import { BrowserRouter } from 'react-router-dom';


describe('Pruebas en el componente <PhoneCard />', () => {
  
    const brand = 'Samsung';
    const imgUrl = 'phone_test_img.jpg';
    const model = 'Phone Model Test';
    const price = 150;
    const id = 'TestId12345';
    
    test('Debe de hacer match con el snapshot', () => {
        
        const { container } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PhoneCard />
                </Provider>
            </BrowserRouter> 
        );

        expect(container).toMatchSnapshot();
    });
     
});
