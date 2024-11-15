import { TextField, InputAdornment,IconButton,MenuItem } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { useState } from 'react';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Text_feild = () => {
  // const [value, setValue] = useState<string>(''); // State for the TextField
  // const [showPassword, setShowPassword] = useState(false);

  // const handlePasswordVisibility = () => setShowPassword(!showPassword);


  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };
  return (
    <>
    {/* <TextField
    label="Name"
    variant="outlined"
    color="secondary"
    helperText="Please enter your full name."
    fullWidth
    value={value}
    onChange={handleChange}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
    }}
  /> */}

{/* <TextField
      label="Password"
      type={showPassword ? 'text' : 'password'}
      variant="filled"
      color="success"
      helperText="Enter a secure password"
      fullWidth
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handlePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    /> */}


{/* <TextField
    label="Age"
    type="number"
    variant="standard"
    error={!value || +value < 18}
    helperText={!value || +value < 18 ? "You must be at least 18." : "Age accepted."}
    fullWidth
    value={value}
    onChange={handleChange}
  /> */}


{/* <TextField
    label="Comments"
    multiline
    rows={4}
    placeholder="Enter your comments here"
    variant="outlined"
    helperText="Feel free to provide additional details."
    fullWidth
  /> */}

<TextField
    select
    label="Currency"
    defaultValue="EUR"
    helperText="Please select your preferred currency."
    variant="filled"
    color="primary"
    fullWidth
  >
    <MenuItem value="USD">USD</MenuItem>
    <MenuItem value="EUR">EUR</MenuItem>
    <MenuItem value="JPY">JPY</MenuItem>
  </TextField>

    </>

)
}

export default Text_feild