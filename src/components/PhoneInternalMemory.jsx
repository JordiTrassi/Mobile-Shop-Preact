import { useEffect, useState } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedPhoneMemory } from '../store/phoneListSlice';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';


export const PhoneInternalMemory = () => {

  const dispatch = useDispatch();
  const { storages } = useSelector(state => state.phoneList.selectedPhone.options);

  const [memory, setMemory] = useState(`${storages[0].code}`);
  
  const onSelectedMemory = ({target}) => {
        setMemory(target.value);
        dispatch(addSelectedPhoneMemory(target.value))
  }

  useEffect(() => {
    if (storages.length === 1) {
        dispatch(addSelectedPhoneMemory(memory));
    }
  },[])


  return (
      
    <FormControl sx={{p: 2}}>
        <FormLabel id="demo-controlled-radio-buttons-group" sx={{ color: 'white', fontSize: 20}}>Select Memory:</FormLabel>
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={memory}
            onChange={onSelectedMemory}
          >
            {                   
                storages.map( memory => (
                    <FormControlLabel value={memory.code} control={<Radio />} label={memory.name} sx={{ml: 2}} />    
                    )) 
            }
        </RadioGroup>
    </FormControl>
  )
}