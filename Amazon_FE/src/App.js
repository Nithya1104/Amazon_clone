import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Signin from './Components/Signin/Signin';
import Login from './Components/Login/Login';
import Banner from './Components/Banner/Banner';
import MyCart from './Components/MyCart/MyCart';
import Buy from './Components/Buy/Buy';
import Gif from './Components/gif/gif';
import ListList from './Components/List/ListList';
import MyCartCart from './Components/MyCart/MyCartCart';

function App() {

  const Navigate = useNavigate();

  const Navigation = (route) => {
    Navigate(route);
  };


  return (
    <>
      <Header Navigation={Navigation} />
      <Routes>
        <Route path='/Signin' element={<Signin Navigation={Navigation} />} />
        <Route path='/List' element={<ListList />} />
        <Route path='/Login' element={<Login Navigation={Navigation}/>}/>
        <Route path='/MyCartCart' element={<MyCartCart Navigation={Navigation} />} />
        <Route path='/Buy' element={<Buy Navigation={Navigation} />} />
        <Route path='/Gif' element={<Gif/>} />
        <Route path='/' element={<Banner/>} />
      </Routes>
      <div className="App">
       
      </div>
    </>
  );
}

export default App;
