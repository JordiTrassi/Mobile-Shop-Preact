import { useEffect } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cleanStore } from '../store';


export const ShopTimer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loadedInformation } = useSelector(state => state.phoneList);

    useEffect(() => {

        let loadingTimer;

        if (loadedInformation) {
            loadingTimer = setInterval(() => dispatch(cleanStore()), 3600000); 
        } else {
            navigate("/home");
        };
        
        return () => clearInterval(loadingTimer);
        
    }, [loadedInformation]);
    
}


