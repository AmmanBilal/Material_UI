import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import React, { useState } from 'react';

const Float_Act_Btn = () => {
  const [selectedValue,setSelectedValue]=useState('a')
  const [value,setValue]=useState('')
  const [error,setError]=useState(false)
  const [helperText,setHelperText]=useState("Choose wisely")



  const handleRadiochange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setValue((event.target as HTMLInputElement).value)
    setHelperText("")
    setError(false)
  }
  const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  
  }
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSelectedValue(event.target.value);
  }
  return (
    <>
     <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>




    <FormControl>
      <FormLabel >Gender</FormLabel>

      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

      <div>
        <Radio checked={selectedValue === 'a'}
        onChange={handleChange}
        value='a'
        name='radio=button'
        inputProps={{ 'aria-label': 'A' }}
        />

      <Radio checked={selectedValue === 'b'}
        onChange={handleChange}
        value='b'
        name='radio=button'
        inputProps={{ 'aria-label': 'B' }}
        />
        
      </div>


      {/* showing Error */}

    <form onSubmit={handleSubmit}>
      <FormControl sx={{m:3}} error={error} variant='standard'>
        <FormLabel >
          Pop quiz:MUI is....
        </FormLabel>
        <RadioGroup name='quiz'
        value={value}
        onChange={handleRadiochange}>
            <FormControlLabel value="best" control={<Radio/>} label="the best!"/>
            <FormControlLabel value="worst" control={<Radio/>} label="the worst!"/>
        </RadioGroup>

<FormHelperText>{helperText}</FormHelperText>
<Button sx={{mt:1,mr:1}}
type='submit' variant='outlined'>
Check Answer
</Button>
      </FormControl>
    </form>


    </>
)
}

export default Float_Act_Btn