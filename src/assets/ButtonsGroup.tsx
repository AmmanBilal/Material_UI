import { useState ,useRef} from "react";
import  Button  from "@mui/material/Button";
import  ButtonGroup  from "@mui/material/ButtonGroup";
// import  Box from "@mui/material/Box";
// import  Stack  from "@mui/material/Stack";
import  ArrowDropDownIcon  from "@mui/icons-material/ArrowDropDown";
import  ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import  Paper  from "@mui/material/Paper";
import  Popper  from "@mui/material/Popper";
import  MenuItem  from "@mui/material/MenuItem";
import  MenuList  from "@mui/material/MenuList";

// const buttons = [
//     <Button key="one">One</Button>,
//     <Button key="two">Two</Button>,
//     <Button key="three">Three</Button>
// ]

const options=['create a merge comit',"squash and merege","rebase and merge"]
export default function ButtonsGroup(){
  const [open, setOpen] = useState(false);
  const [selectedIndex,setSelectedIndex] = useState(1)
  const anchorRef = useRef<HTMLDivElement>(null)
  
  const handleClick=()=>{
    console.info(`You Clicked ${options[selectedIndex]}`)
  }
  const handleToggle=()=>{
    setOpen((prev_open)=>!prev_open)
  }
  const handleClose = (event: MouseEvent | TouchEvent) => {
    
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return; 
    }
    setOpen(false); 
  };
  


  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  }
  


  
   return(
    <>

<ButtonGroup
        variant="contained"
        aria-label="Button group with a nested menu"
        ref={anchorRef}
      >
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button size="small"
        aria-controls={open ? 'split-button-menu': undefined}
        aria-expanded={open ? 'true':undefined}
        aria-label="select merge strategy"
        aria-haspopup="menu"
        onClick={handleToggle}>
          <ArrowDropDownIcon/>
        </Button>
      </ButtonGroup>
      <Popper sx={{zIndex:1}}
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal>
        
          {({TransitionProps,placement})=>(
          <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center top' : 'center bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="split-button-menu" autoFocusItem>
                {options.map((option,index)=>(
                  <MenuItem key={option}
                  disabled={index ===2}
                  selected={index ===selectedIndex}
                  onClick={()=> handleMenuItemClick(index)}>
                    {option}
                  </MenuItem>
                ))}

              </MenuList>
            </ClickAwayListener>
          </Paper>
            </Grow>
          )}
    

      </Popper>


{/* 
    <Stack>
    <ButtonGroup size="small" aria-label="Small button group">
  {buttons}
</ButtonGroup>
<ButtonGroup color="secondary" aria-label="Medium-sized button group">
  {buttons}
</ButtonGroup>
<ButtonGroup size="large" aria-label="Large button group">
  {buttons}
</ButtonGroup>
    </Stack>
    




<Stack>
<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="Small button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="Medium-sized button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="Large button group">
        {buttons}
      </ButtonGroup>
    </Box>
</Stack> */}


  
    </>
   



   )             
}