import { Provider } from 'react-redux'
import { Router } from 'preact-router'
import { Header } from './components/Header'
import { HomePage, ProductDetailPage, ProductListPage } from './pages'
import { store } from './store/store'
// import Redirect from './router/Redirect'


export const App = () => {
  
  return (
    <>
      <Provider store={store}>
        <Header />
        <Router>
            <HomePage path="/" />
            <ProductListPage path="/list" />
            <ProductDetailPage path="/product" />
            {/* <Redirect path="/*" to="/" /> */}
        </Router> 
      </Provider>
    </>

  )
}



