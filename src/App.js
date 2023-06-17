
import HeaderContainer from './components/Header/HeaderContainer';
import SearchContainer from './pages/Search/SearchContainer';
import LoginContainer from './pages/Login/LoginContainer';
import Index from './pages/Index/Index';
import {Routes, Route, redirect} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faMagnifyingGlass, faCheck } from "@fortawesome/free-solid-svg-icons";
import { funOrState, funOrValue, funOpState, funOpValue } from './reduxjs-toolkit/searchSlice.js';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

library.add(faAngleDown, faMagnifyingGlass, faCheck);

function App() {
  const authReducer = useSelector((state) => state.authReducer);

  return (
    <div className="main">
      <HeaderContainer/>
      <Routes>
      	<Route path='/' element={<Index/>}/>
        <Route path='/search' element={<SearchContainer/>}/>
        <Route path='/login' element={<LoginContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
