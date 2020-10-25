import React from 'react';
import CardModule from './cards.module.css'

const Cards = ({data}) =>{
    let date = ''
    return(
        <div className={CardModule.wrapper}>
            {
                data.map((item) => {
                  const cutDate = item.dt_txt.slice(0,10)
                  const cutDate2 = item.dt_txt.slice(0,16)
                    if(cutDate === date){
                    }else{
                        date = cutDate
                        return(
                            
                                <div className={CardModule.card}>
                                    <div className={CardModule.box}>
                                        <div className={`${CardModule.wave} ${CardModule._one}`}></div>
                                        <div className={`${CardModule.wave} ${CardModule._two}`}></div>
                                        <div className={`${CardModule.wave} ${CardModule._three}`}></div>
                                        <div className={CardModule.weathercon}><img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt=''/><i className='fas fa-sun' ></i></div>
                                        <div className={CardModule.info}>
                                            <p className={CardModule.date}>{cutDate2}</p>
                                            <h2 className={CardModule.location}>{item.weather[0].main}</h2>
                                            <h1 className={CardModule.temp}>{item.main.temp} &deg;C</h1>
                                        </div>
                                    </div>
                                    {/* <!-- ------------------------ --> */}
                                </div>
                            
                        )
                    }
                })
            }
        </div>
    )
    
}

export default Cards;