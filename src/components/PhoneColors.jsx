import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useSelector } from 'react-redux';


export const PhoneColors = () => {
    const { colors } = useSelector(state => state.phoneList.selectedPhone);
    console.log(colors);

    return (
      
    <FormControl sx={{p: 2}}>
        <FormLabel id="demo-controlled-radio-buttons-group" sx={{ color: 'white', fontSize: 20}}>Select Color:</FormLabel>
        <RadioGroup
            // aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // value={value}
            // onChange={handleChange}
          >
            {                   
                colors.map( color => (
                    <FormControlLabel value={color} control={<Radio />} label={color} sx={{ml: 2}} />    
                    )) 
            }

        </RadioGroup>
    </FormControl>
  )
}
