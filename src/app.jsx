// import { useState } from 'preact/hooks'

import  Router  from 'preact-router'
import { Header } from './components/Header'
import { HomePage, ProductDetailPage, ProductListPage } from './pages'

import './app.css'



export const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Router>
          <HomePage path="/" />
          <ProductListPage path="/list" />
          <ProductDetailPage path="/product" />
      </Router> 

    </>
  )
}



