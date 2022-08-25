import { Provider } from 'react-redux';
import { Header } from './components/Header';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';



export const App = () => {
  
  return (
    <>
      <Provider store={store}>
        <Header />
        <AppRouter />
      </Provider>
    </>

  )
}



