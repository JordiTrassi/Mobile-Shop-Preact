import { Fragment } from 'preact';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InitialView } from '../views';
import { IsLoading } from '../components';


export const HomePage = () => {

  const { phones, isLoading } = useSelector(state => state.phoneList);
  const navigate = useNavigate();

  return (
    <Fragment>
      {
        (isLoading)
          ? <IsLoading />
          : (phones.length)
            ? navigate("/list")
            : <InitialView />
      }
    </Fragment>
  )
}


