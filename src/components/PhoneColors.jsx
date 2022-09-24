import { useEffect, useState } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedPhoneColor } from '../store/phoneListSlice';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export const PhoneColors = () => {
    
    const dispatch = useDispatch();
    const { colors } = useSelector(state => state.phoneList.selectedPhone.options);

    const [colorSelected, setColorSelected] = useState(`${colors[0].code}`);
    
    const onSelectedColor = ({target}) => {
        setColorSelected(target.value);
        dispatch(addSelectedPhoneColor(target.value))
    }

    useEffect(() => {
        if (colors.length === 1) {
            dispatch(addSelectedPhoneColor(colorSelected));
        }        
    },[])
    

    return (
      
        <FormControl sx={{p: 2}}>
            <FormLabel id="demo-controlled-radio-buttons-group" sx={{ color: 'white', fontSize: 20}}>Select Color:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={colorSelected}
                onChange={onSelectedColor}
            >
                {                   
                    colors.map( color => (
                        <FormControlLabel value={color.code} control={<Radio />} label={color.name} sx={{ml: 2}} />    
                    )) 
                }
            </RadioGroup>
        </FormControl>
    )
}
