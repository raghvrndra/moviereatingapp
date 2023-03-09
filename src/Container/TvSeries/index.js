import React,{useState,useEffect} from "react";

import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import axios from "axios";
import CardMoviesComponents from '../../Components/CardMovies/index.js'
import LeftListBarComponent from '../../Components/LeftListBarComponent/index'
import useGenres from '../../Hooks/useGenres.js'
import PaginationComponent from "../../Components/Pagination/index.js";

const TvSeriesContainer=()=>{

const [content,setContent]=useState([]);

const [genres,setGenres]=useState([]);
const [selectedGenres,setSelectedGenres]=useState([]);

const [pageno,setPageno]=useState(1)
const[Paginationno,setPagiatinono]=useState(0)
const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;


const genreforURL=useGenres(selectedGenres)
const GetDataTranding=async()=>{

const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=220c83b3095a8d723191a3bd38eaa6ed&page=${pageno}&with_genres=&language=en-US&with_genres=${genreforURL}`)
console.log(data)
setContent(data.results);
setPagiatinono(data.total_Page);

}
useEffect(()=>{
console.log('Trending Component did mount')
GetDataTranding();
},[])

useEffect(()=>{
GetDataTranding();

},[pageno,genreforURL])

const handleClick = (number)=>{
setPageno(number);
}
useEffect(()=>{
console.log('Tranding Component didupdate mount');
GetDataTranding();
},[pageno])
return (
<main className="homePage">
<Container>

<Row>
<Col className='col-12'> 
<section>
<h1 className="txtCenter">TOP TRENDING TV SERIES</h1>
<h3 className="txtCenter">FOR YOU</h3>
</section>
</Col>
</Row>
<Row>
<Col className="col-10">

<Row>

{
content&&content.length>0?content.map((item,index)=>{
return(<CardMoviesComponents key={index}data={item}mediaType="tv"/>)          
}):'Loading....'
},

{
Paginationno&&Paginationno>1?<PaginationComponent maxnum={Paginationno}activenum={pageno}handleClick={handleClick}/>:''


}
</Row>

</Col>
</Row>
</Container>

</main>
)
}
export default TvSeriesContainer




























































