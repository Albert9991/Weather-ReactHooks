import React,{useState,useEffect} from 'react'
import './header.css'

const Header = ({setcountryName}) => {
    return(
        <div className="Header">
            <img
                src={'https://images-na.ssl-images-amazon.com/images/I/61nuuPxUvaL.png'}
                alt="logo"
                className="Header-logo"
            />
            <input className = 'search' placeholder = "Search City" onKeyUp = {e =>{
                if(e.key = enter){
                    setcountryName(document.querySelector('.search').value)
                }
            }}/>
    </div>
    )
}

export default Header