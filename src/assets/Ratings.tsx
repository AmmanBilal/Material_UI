import Box from '@mui/material/Box';
import Rating,{IconContainerProps} from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import  Stack  from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star'
import {styled} from '@mui/material/styles'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

const labels:{[index:string]:string}={
  0.5:"Useless",
  1:"Useless+",
  1.5:"Poor",
  2:"Poor+",
  2.5:"Ok",
  3:"OK+",
  3.5:"Good",
  4:"Good+",
  4.5:"Excellent",
  5:"Excelent+"
}

function getLabelText(value:number){
  return `${value} Star${value !==1? 's':''},${labels[value]}`
}

const StyledRating=styled(Rating)(({theme})=>({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root':{
    color:theme.palette.action.disabled
  }
}))

const customIcons:{[index:string]:{
  icon:React.ReactElement<unknown>
  label:string
}}= {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  }
}

function IconContainer(props:IconContainerProps){
  const {value,...other}=props
  return <span {...other}>{customIcons[value].icon}</span>
}
const Ratings = () => {
  const [value,setValue]=useState<number|null>(2)
  const [hover,setHover]=useState(-1)
  return (
    <>
      <Box sx={{'& > legend':{mt:2}}}>
        <Typography component="legend">Controlled</Typography>
        <Rating name='simple-controlled'
        value={value}
        onChange={(event,newValue)=>{
          setValue(newValue)
        }}/>
        <Typography component="legend">Read only</Typography>
          <Rating
          name='read only' 
          value={value}
          readOnly/>
        <Typography component="legend">Disabled</Typography>
        <Rating name='disabled' value={value} disabled/>
        <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>

    <h4>Reating Precison</h4>
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>

    <h4>Hover Feedback</h4>
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>

    <h4>Radio Group</h4>
      <StyledRating
      name='highligted-selected-only'
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value:number)=>customIcons[value].label}
      highlightSelectedOnly/>


    </>
  )
}

export default Ratings