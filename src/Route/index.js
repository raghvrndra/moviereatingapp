import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomeContainer from '../Container/Home/index'
import MoviesContainer  from '../Container/Movies/index'
import SearchContaine from '../Container/Search/index'
import AboutContainer from '../Container/About/index'
import TvSeriesContainer from '../Container/TvSeries/index'
import DetailsContainer from '../Container/Details/Details';
import ContactContainer from '../Container/Contact/index'
import  FooterComponents from '../Components/Footer/Footer'
import HeaderComponents  from '../Components/Header/Header';
const RouteComponent=()=>{
return(
 <>
<BrowserRouter>
<HeaderComponents/>
<br/>

<Routes>
<Route path="/" element={<HomeContainer/>}/>
<Route path="/about" element={<AboutContainer/>}/>
<Route path="contact" element={<ContactContainer/>}/>
<Route path="/movies" element={<MoviesContainer/>}/>
<Route path="/series" element={<TvSeriesContainer/>}/>
<Route path="/search" element={<SearchContaine/>}/>
<Route path="/details/:movieid/:mediatype" element={<DetailsContainer/>}/>

</Routes>
<br/>
<FooterComponents/>

</BrowserRouter>
</>
)
}
export default RouteComponent;