import {  Navigate, Route, Routes} from 'react-router-dom';

import { HomePage, ProductDetailPage, ProductListPage } from '../pages';


export const AppRouter = () => {
  return (
      
    <Routes>
     
        <Route path="/home" element={<HomePage />} />
        <Route path="/list" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
   
        <Route path="/*" element={<Navigate to="/home" />} />
      
    </Routes>
    
  )
}