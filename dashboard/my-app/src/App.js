import './App.css';
import {ThemeProvider,createTheme} from '@mui/material'
import {Navigate, Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import AddDepartment from './pages/AddDepartment';
import Login from './pages/Login';
import {useSelector} from 'react-redux'
import AddCategory from './pages/AddCategory';
import Departments from './pages/Departments';
import Categories from './pages/Categories';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import EditProduct from './pages/EditProduct';

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
          <Route path="add-category" element={currentAdmin?<AddCategory/>:<Navigate to="/login"/>}/>
          <Route path="departments" element={currentAdmin?<Departments/>:<Navigate to="/login"/>}/>
          <Route path="categories" element={currentAdmin?<Categories/>:<Navigate to="/login"/>}/>
          <Route path="departments/:departmentId/categories" element={currentAdmin?<Categories/>:<Navigate to="/login"/>}/>
          <Route path="products" element={currentAdmin?<Products/>:<Navigate to="/login"/>}/>
          <Route path="product/:productId" element={currentAdmin?<SingleProduct/>:<Navigate to="/login"/>}/>
          <Route path="edit-product/:productId" element={currentAdmin?<EditProduct/>:<Navigate to="/login"/>}/>
          <Route path="categories/:categoryId/products" element={currentAdmin?<Products/>:<Navigate to="/login"/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
