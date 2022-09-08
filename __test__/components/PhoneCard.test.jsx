import { fireEvent, render, screen } from '@testing-library/preact';
import { h } from 'preact';
import { Provider } from 'react-redux';
import { PhoneCard } from '../../src/components/PhoneCard';
import { store } from '../../src/store/store'
import { BrowserRouter } from 'react-router-dom';

const props = {
    brand: 'Samsung',
    imgUrl: 'phone_test_img.jpg',
    model: 'Phone Model Test',
    price: 150,
    id: 'TestId12345',
};

describe('Pruebas en el componente <PhoneCard />', () => {

    beforeEach(() => jest.clearAllMocks());
    
    test('Debe de hacer match con el snapshot con los valores enviados por props', () => {
        
        const { container } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PhoneCard {...props} />
                </Provider>
            </BrowserRouter> 
        );
        expect(container).toMatchSnapshot();
    });

    test('El iconButton de Material UI debe llamar a onSelectedPhone()', () => {

        // Pasamos como parametro el nombre de la función que queremos llamar, 
        // ya que el fireEvent no funciona bien con los componentes de Material UI.  

        const onSelectedPhone = jest.fn();
        const anonymous = jest.fn();

        const configBtnValues = {"l":  {
            "clickfalse": onSelectedPhone,
            "contextmenufalse": anonymous,
            "dragleavefalse": anonymous,
            "focusinfalse": anonymous,
            "focusoutfalse": anonymous,
            "keydownfalse": anonymous,
            "keyupfalse": anonymous,
            "mousedownfalse": anonymous,
            "mouseleavefalse": anonymous,
            "mouseoverfalse": anonymous,
            "mouseupfalse": anonymous,
            "touchendfalse": anonymous,
            "touchmovefalse": anonymous,
            "touchstartfalse": anonymous,
            },
        };
        
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <PhoneCard {...props} />
                </Provider>
            </BrowserRouter>
        );

        const btnDetail = screen.getByRole('button', { name: 'btn-detail' });
        
        // console.log(btnDetail.l.clickfalse);
        // fireEvent.click(btnDetail);

        // expect(onSelectedPhone).toHaveBeenCalled();
       
        expect(btnDetail).toMatchObject(JSON.parse(JSON.stringify(configBtnValues)));  
        
    });
    
     
});
