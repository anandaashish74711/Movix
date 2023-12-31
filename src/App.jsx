import { useState,useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {fetchDataFromApi} from "./utils/api";
import {useSelector, useDispatch} from 'react-redux';
import{getApiConfiguration} from './Store/homeSlice'
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/searchResult';
import explore from './pages/explore/explore';
import PageNotfound from './pages/404/PageNotfound';

function App() {
  const dispatch=useDispatch();
  const {url}=useSelector((state)=>state.home)
 useEffect(()=>{
  fetchApiConfig();
 },[]);
 const fetchApiConfig=()=>{
  fetchDataFromApi("/configuration").then((res)=>{
  console.log(res);
  const url={
    backdrop:res.images.secure_base_url+"orignal",
    poster:res.images.secure_base_url+"orignal",
    profile:res.images.secure_base_url+"orignal",
  }
  dispatch(getApiConfiguration (url));
 
 });
 };
  return (<BrowserRouter>
  {/* <Header/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:mediaType/:id' element={<Details/>}/>
    <Route path='/search/:query'element={<SearchResult/>}/>
    <Route path='*' element={<PageNotfound/>}/>
    </Routes>
{/* <Footer/> */}
  </BrowserRouter>

  )
  
}

export default App;
