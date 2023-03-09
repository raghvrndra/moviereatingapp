import React from 'react'

import './style.css';


const SearchBarCardComponents=({searchValue,setSearchValue,typeValue,setTypeValue,filterData})=>{

const changeSearchHandler=(e)=>{
console.log(e.target.value)
setSearchValue(e.target.value)
}
 
const chagneValueHandeler=(e)=>{
console.log(e.target.value)
setTypeValue(e.target.value)
} 
const handleSubmit=(e)=>{
e.preventDefault();
filterData()

}
 
 
 return(
             <>
             <div className='searchBox'>
             <div className='container'>
             <h6>TYPE MOVIE OR TV SHOW NAME TO FIND IT</h6>
             <div className=' checkBoxSec'>
                          
                          <label htmlFor='seriesFind'>
                          <input type='radio' value='movie'onChange={chagneValueHandeler}checked={typeValue==='movie'?true:false}name='findSeriesType'id='seriesFind'/> 
                          <span> MOVIE </span>
                          </label>
                          <label htmlFor='tvFind'>
                          <input  type= 'radio' value= 'tv' onChange={chagneValueHandeler}checked={typeValue==='tv'?true:false}name="findTvType" id="tvFind"/>  
                          <span> TV </span>
                          </label>

             </div>
             <form onSubmit={handleSubmit}>
             <input type="search" value={searchValue} onChange={changeSearchHandler} placeholder='Search here'></input>
             <input type='submit' value='FIND'></input>
             </form>
             </div>

             </div>
             
             
             </>
 )

}
export default SearchBarCardComponents;