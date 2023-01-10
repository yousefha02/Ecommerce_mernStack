import './App.css';
import {ThemeProvider,createTheme} from '@mui/material'
import {Navigate, Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import AddDepartment from './pages/AddDepartment';
import Login from './pages/Login';
import {useSelector} from 'react-redux'
const theme = createTheme({
  palette:{
    primary:{
      main:"#ff5252",
      contrastText:"white"
    }
  }
})

function App() {
  const {currentAdmin} = useSelector((state)=>state.admin)
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="login" element={currentAdmin?<Navigate to="/"/>:<Login/>}/>
          <Route path="" element={currentAdmin?<Home/>:<Navigate to="/login"/>}/>
          <Route path="add-product" element={currentAdmin?<AddProduct/>:<Navigate to="/login"/>}/>
          <Route path="add-department" element={currentAdmin?<AddDepartment/>:<Navigate to="/login"/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
