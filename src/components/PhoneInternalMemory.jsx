import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useSelector } from 'react-redux';


export const PhoneInternalMemory = () => {
    const { internalMemory } = useSelector(state => state.phoneList.selectedPhone);
    console.log(internalMemory);

    return (
      
    <FormControl sx={{p: 2}}>
        <FormLabel id="demo-controlled-radio-buttons-group" sx={{ color: 'white', fontSize: 20}}>Select Memory:</FormLabel>
        <RadioGroup
            // aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={value}
            // onChange={handleChange}
          >
            {                   
                internalMemory.map( memory => (
                    <FormControlLabel value={memory} control={<Radio />} label={memory} sx={{ml: 2}} />    
                    )) 
            }

        </RadioGroup>
    </FormControl>
  )
}