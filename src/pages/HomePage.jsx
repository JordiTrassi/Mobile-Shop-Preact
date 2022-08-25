import { Fragment } from 'preact';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { InitialView } from '../views/InitialView';


export const HomePage = () => {

  const { phones } = useSelector(state => state.phoneList);
  console.log(phones);
  
  return (
    <Fragment>
      {
        (phones.length)
          ? <Navigate to="/list" />
          : <InitialView />
      }
    </Fragment>
   
  )
}


