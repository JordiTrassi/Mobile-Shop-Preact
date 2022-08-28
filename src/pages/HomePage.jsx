import { Fragment } from 'preact';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { InitialView } from '../views/InitialView';
import { IsLoading } from '../components/IsLoading';


export const HomePage = () => {

  const { phones, isLoading } = useSelector(state => state.phoneList);
  
  

  return (
    <Fragment>
      
      {/* {
        (phones.length)
          ? <Navigate to="/list" />
          : <InitialView />
      } */}

      {
        (isLoading)
          ? <IsLoading />
          : (phones.length)
            ? <Navigate to="/list" />
            : <InitialView />
      }
    </Fragment>
   
  )
}


