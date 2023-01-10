import './App.css';
import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {createTheme,ThemeProvider} from '@mui/material'
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';

function App() {
  const {user} = useSelector((state)=>state.userLogin)
  
  const theme = createTheme({
    palette:{
      primary:{
        main:"#ff5252",
        contrastText:"white"
      }
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
