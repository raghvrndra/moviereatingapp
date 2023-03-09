import React,{useEffect,useState} from "react";
import  Container  from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import  Col  from "react-bootstrap/Col";
import axios from "axios";
import CardMoviesComponents from '../../Components/CardMovies/index'
import PaginationComponent from '../../Components/Pagination'
 import SearchBarCardComponents from "../../Components/SearchBox";


const SearchContainer=()=>{

const [content,setContent]=useState([]);
const [pageno,setPageno]=useState(1);
const[Paginationno,setPaginationno]=useState(0);
const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
 
const[searchValue,setSearchValue]=useState('crime');
const[typeValue,setTypeValue]=useState('movie');

const GetDataTranding=async()=>{

             const {data} = await axios.get(`https://api.themoviedb.org/3/search/${typeValue}?api_key=220c83b3095a8d723191a3bd38eaa6ed&page=${pageno}&language=en-US&&query=${searchValue}&page=1&include_adult=false`)
             setContent(data.results);
setPaginationno(data.total_pages);
}

useEffect(()=>{
console.log('Tranding Component did mount');
GetDataTranding();
},[])


const fetchDataQuery=()=>{
GetDataTranding()
}

const handelClick=(number)=>{
             setPageno(number);
}

useEffect(()=>{
             console.log('Tranding Component didupdate mount');
             GetDataTranding();
},[pageno])

return(
             <main className="homePage">   
<Container>  
<Row>
<Col className="col-12">
<section>
<h1 className="txtCenter">Search Movies/ TV Series</h1>
<h3 className="txtCenter">For You</h3>
<SearchBarCardComponents
searchValue={searchValue}
setSearchValue={(value)=>{setSearchValue(value)}}
typeValue={typeValue}
setTypeValue={(value)=>{setTypeValue(value)}}
filterData={fetchDataQuery}
/>

</section>

</Col>

</Row>

<Row>
<Col className="col-12">
<Row>
{
content&& content.length>0?content.map((item,index)=>{

             return(<CardMoviesComponents key={index} data={item} mediaType={typeValue}/>)
}):'Loding....'
}
{
Paginationno&&Paginationno>1?<PaginationComponent maxnum={Paginationno}activenum={pageno} handleClick={handelClick}/>:''
}
</Row>




</Col>
</Row>

</Container>
             
 </main>
)

}

export default SearchContainer

















