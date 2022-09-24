import { Provider } from 'react-redux';
import { Header, ShopTimer } from './components';
import { AppRouter } from './router/AppRouter';
import { store } from './store';


export const App = () => {
  
  return (
      <Provider store={store}>
        <Header />
        <AppRouter />
        <ShopTimer />
      </Provider>
  )
}

