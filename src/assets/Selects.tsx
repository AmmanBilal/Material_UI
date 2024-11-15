import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import { useTheme, Theme } from '@mui/material/styles';

// data for multiple Select
const Item_height = 48
const Item_Padding_top=8
const MenuProps={
  PaperProps:{
    style:{
      maxHeight:Item_height*Item_Padding_top,
      width:250
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];



const Selects = () => {
  const [age,setAge]=useState('')
  const [personName,setPersonName] = useState<string[]>([])
  const handleChange=(e:SelectChangeEvent)=>{
    setAge(e.target.value)
  }

  const handleMultiChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  }


  function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    }
  }
  
  const theme =useTheme()

  
  
  return (
    <>
    <Box sx={{minWidth:120}}>
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select 
        labelId='select label'
        id='select label'
        value={age}
        label="Age"
        onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

    </Box>

    <div>
      <FormControl sx={{m:1,minWidth:120}} disabled>
        <InputLabel>Age</InputLabel>
        <Select labelId='select-disbaled-label'
        id='select-disbaled-label'
        value={age}
        label="Age"
        onChange={handleChange}>
      
        <MenuItem value=''>
        <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>


      <FormControl sx={{m:1,minWidth:120}} error>
        <InputLabel>Age</InputLabel>
        <Select labelId='select-error-label'
        id='select-error-label'
        value={age}
        label="Age"
        onChange={handleChange}
        renderValue={(value)=>`⚠️  -${value}`}>
      
        <MenuItem value=''>
        <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select
          labelId="simple-select-readonly-label"
          id="simple-select-readonly"
          value={age}
          label="Age"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      

      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="simple-select-required-label">Age</InputLabel>
        <Select
          labelId="simple-select-required-label"
          id="simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>


    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleMultiChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => (selected as string[]).join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>



      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleMultiChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    </>
  )
}

export default Selects