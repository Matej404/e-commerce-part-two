import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Register from '../routes/Register/Register';
import Login from '../routes/Login/Login';
import Orders from '../routes/Orders/Orders';
import ProductDetails from './ProductDetails/ProductDetails';
import Home from './ProductList/Home';
import Cart from '../routes/Cart/Cart';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Customize the primary color
    },
    secondary: {
      main: '#f50057', // Customize the secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Customize the default font family
  },
});

function App() {
  return (
    <div  style={{flex: 1}}>
      <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />

            <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
