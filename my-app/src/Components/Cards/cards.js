import React from 'react';
import cardsModule from './cards.module.css'

const Cards = () => {
    return(
        <div>
            <div className={cardsModule.container} id={cardsModule.wrapper}>
                <div className={cardsModule.container_fluid} id={cardsModule.current_weather}>
                    <div className={cardsModule.row}>
                        <div className={cardsModule.head}>
                        <p id={cardsModule.tempDescription}>iconeTemp</p>
                            <h6 id={cardsModule.localDate}> DATA</h6>
                        </div>
                        <div className={cardsModule.descrip}>
                            <h5 id={cardsModule.cityName}>
                                <span >City Name</span>
                            </h5>
                            <h5 id={cardsModule.localTime}> TIME</h5>
                        </div>
                        <div className={cardsModule.temp} >
                            <div className={cardsModule.row}>
                                <i className={cardsModule.wi} id={cardsModule.main_icon} ></i>
                                <div>
                                    <span id={cardsModule.mainTemperature}>Temp°C</span>
                                </div>
                            </div>
                        </div>
                        <div className={cardsModule.humWid}>
                            <div className={`${cardsModule.col_md_12} ${cardsModule.col_sm_3} ${cardsModule.col_xs_3} ${cardsModule.side_weather_info}`}>
                                <h6>Humidity: <span id={cardsModule.humidity}>54</span>%</h6>
                            </div>
                            <div className={`${cardsModule.col_md_12} ${cardsModule.col_sm_3} ${cardsModule.col_xs_3} ${cardsModule.side_weather_info}`}>
                                <h6>Wind: <span id={cardsModule.wind}>45</span> m/s</h6>
                            </div>
                            <div className={`${cardsModule.col_md_12} ${cardsModule.col_sm_3} ${cardsModule.col_xs_3} ${cardsModule.side_weather_info}`}>
                                <h6>High: <span id={cardsModule.mainTempHot}></span>°</h6>
                            </div>
                            <div className={`${cardsModule.col_md_12} ${cardsModule.col_sm_3} ${cardsModule.col_xs_3} ${cardsModule.side_weather_info}`}>
                                <h6>Low: <span id={cardsModule.mainTempLow}></span>°</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- card --> */}
            <div className={cardsModule.card}>
                <div className={cardsModule.box}>
                    <div className={`${cardsModule.wave} ${cardsModule._one}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._two}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._three}`}></div>
                    <div className={cardsModule.weathercon}>ICONE<i className='fas fa-sun' ></i></div>
                    <div className={cardsModule.info}>
                        <p className={cardsModule.date}>MONDAY | SEP 12 | 12:34</p>
                        <h2 className={cardsModule.location}>SUNNYVILLE</h2>
                        <h1 className={cardsModule.temp}>25 &deg;C</h1>
                    </div>
                </div>
                {/* <!-- ------------------------ --> */}
                <div className={cardsModule.box}>
                    <div className={`${cardsModule.wave} ${cardsModule._one}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._two}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._three}`}></div>
                    <div className={cardsModule.weathercon}>ICONE<i className='fas fa-sun' ></i></div>
                    <div className={cardsModule.info}>
                        <p className={cardsModule.date}>MONDAY | SEP 12 | 12:34</p>
                        <h2 className={cardsModule.location}>SUNNYVILLE</h2>
                        <h1 className={cardsModule.temp}>25 &deg;C</h1>
                    </div>
                </div>
                <div className={cardsModule.box}>
                    <div className={`${cardsModule.wave} ${cardsModule._one}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._two}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._three}`}></div>
                    <div className={cardsModule.weathercon}>ICONE<i className='fas fa-sun' ></i></div>
                    <div className={cardsModule.info}>
                        <p className={cardsModule.date}>MONDAY | SEP 12 | 12:34</p>
                        <h2 className={cardsModule.location}>SUNNYVILLE</h2>
                        <h1 className={cardsModule.temp}>25 &deg;C</h1>
                    </div>
                </div>
                <div className={cardsModule.box}>
                    <div className={`${cardsModule.wave} ${cardsModule._one}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._two}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._three}`}></div>
                    <div className={cardsModule.weathercon}>ICONE<i className='fas fa-sun' ></i></div>
                    <div className={cardsModule.info}>
                        <p className={cardsModule.date}>MONDAY | SEP 12 | 12:34</p>
                        <h2 className={cardsModule.location}>SUNNYVILLE</h2>
                        <h1 className={cardsModule.temp}>25 &deg;C</h1>
                    </div>
                </div>
                <div className={cardsModule.box}>
                    <div className={`${cardsModule.wave} ${cardsModule._one}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._two}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._three}`}></div>
                    <div className={cardsModule.weathercon}>ICONE<i className='fas fa-sun' ></i></div>
                    <div className={cardsModule.info}>
                        <p className={cardsModule.date}>MONDAY | SEP 12 | 12:34</p>
                        <h2 className={cardsModule.location}>SUNNYVILLE</h2>
                        <h1 className={cardsModule.temp}>25 &deg;C</h1>
                    </div>
                </div>
                <div className={cardsModule.box}>
                    <div className={`${cardsModule.wave} ${cardsModule._one}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._two}`}></div>
                    <div className={`${cardsModule.wave} ${cardsModule._three}`}></div>
                    <div className={cardsModule.weathercon}>ICONE<i className='fas fa-sun' ></i></div>
                    <div className={cardsModule.info}>
                        <p className={cardsModule.date}>MONDAY | SEP 12 | 12:34</p>
                        <h2 className={cardsModule.location}>SUNNYVILLE</h2>
                        <h1 className={cardsModule.temp}>25 &deg;C</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards