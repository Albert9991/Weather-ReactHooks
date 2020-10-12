import React,{useState , usEffect} from 'react';
import Header from '../Header/header';
import Cards from '../Cards/cards'

const List = () =>{

    const [countryName , setcountryName] = useState(null)
    const [data , setData] = useState(null)

    return(
        <div>
            <Header 
            countryName = {setcountryName}/>
            <Cards/>
        </div>
    )
}

export default List