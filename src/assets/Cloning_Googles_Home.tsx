import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import AppsIcon from '@mui/icons-material/Apps';
import './Cloning.css';

const top5Songs = [
  { title: 'tera hony lga hon' },
  { title: 'agr tum sath ho' },
  { title: 'ap humari jan ban gy' },
  { title: 'perfect' },
  { title: 'tery bin' },
];

const Cloning_Googles_Home = () => {
  const style = {
    root: {
      width: 600,
      color: '#fff',
    },
  };

  return (
    <>
      <div>
        <Stack spacing={2} sx={{ width: 300 }}>
          <nav>
            <p>Gmail</p>
            <p>Images</p>
            <AppsIcon />
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"  // Replace with your own image URL if needed
                alt="Logo"
              />
            </div>
          </nav>
          <div id="logo-div">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"  // Replace with Google logo or other logo as needed
              alt="Google Logo"
            />
          </div>

          <div id="autocomplete-div">
            <Autocomplete
              id="auto-complete"
              freeSolo
              options={top5Songs.map((option) => option.title)}
              sx={style.root}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="freeSolo"
                  InputProps={{
                    ...params.InputProps,
                    style: { fontFamily: 'Nunito', color: 'white' },
                  }}
                />
              )}
            />
            <article>
              <div className="below-input">Google Search</div>
              <div className="below-input">I'm feeling lucky</div>
            </article>
          </div>

          <footer className="aside2">
            <div className="aside1">
              <p>About</p>
              <p>Advertising</p>
              <p>Business</p>
              <p>How Search works</p>
            </div>

            <div className="aside2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Carbon_neutral_logo.png/120px-Carbon_neutral_logo.png"  // Replace with carbon neutral image if needed
                alt="Carbon Neutral Logo"
                data-atf="1"
                data-frt="0"
              />
              <p>Carbon Neutral since 2007</p>
            </div>

            <div className="aside3">
              <p>Privacy</p>
              <p>Terms</p>
              <p>Settings</p>
            </div>
          </footer>
        </Stack>
      </div>
    </>
  );
};

export default Cloning_Googles_Home;
