import './App.css'
import WeatherApp from './assets/Components/WeatherApp'

function App() {
  return (
    <WeatherApp />
  )
}

export default App










// import './App.css'
// import Button from '@mui/material/Button';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Alert from '@mui/material/Alert';

// function App() {
//   const btnHandle = ()=>{
//     console.log("Clicked");
//   }
//   const ratingHandle = (e)=>{
//     console.log(e.target.value);
//   }
//   return (
//     <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[100vh] flex flex-col gap-2 justify-center items-center'>
//       <Button onClick={btnHandle} variant="outlined" color="secondary">Secondary</Button>
//       <Button onClick={btnHandle} variant="outlined" color="secondary" size='large'>Secondary</Button>
//       <Button onClick={btnHandle} variant="outlined" color="secondary" size='small' disabled>Secondary</Button>
//       <Typography component="legend">Controlled</Typography>
//       <Rating onChange={ratingHandle} name="half-rating" defaultValue={2.5} precision={0.5} />
//       <Rating name="half-rating-read" defaultValue={2.5} precision={0.5}  />
//       <Button variant="outlined" startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//       <Button variant="contained" endIcon={<SendIcon />}>
//         Send
//       </Button>
//       <Alert severity="success">This is an info success — check it out!</Alert>
//     </div>
//   )
// }

// export default App
