import React from 'react';
import CardModule from './cards.module.css'

const Cards = ({data}) =>{
    return(
        <div className={CardModule.wrapper}>
            <div className={CardModule.card}>
                <div className={CardModule.box}>
                    <div className={`${CardModule.wave} ${CardModule._one}`}></div>
                    <div className={`${CardModule.wave} ${CardModule._two}`}></div>
                    <div className={`${CardModule.wave} ${CardModule._three}`}></div>
                    <div className={CardModule.weathercon}>ICONE<i className='fas fa-sun' ></i></div>
                    <div className={CardModule.info}>
                        <p className={CardModule.date}>MONDAY | SEP 12 | 12:34</p>
                        <h2 className={CardModule.location}>SUNNYVILLE</h2>
                        <h1 className={CardModule.temp}>25 &deg;C</h1>
                    </div>
                </div>
                {/* <!-- ------------------------ --> */}
            </div>
        </div>
    )
}

export default Cards;