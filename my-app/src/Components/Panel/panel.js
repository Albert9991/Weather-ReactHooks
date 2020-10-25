import React from 'react';
import panelModule from './panel.module.css'

const Panel = ({data}) => {
    console.log(data)
    return(
        <div>
            <div className={panelModule.container} id={panelModule.wrapper}>
                <div className={panelModule.container_fluid} id={panelModule.current_weather}>
                    <div className={panelModule.row}>
                        <div className={panelModule.head}>
                        <p id={panelModule.tempDescription}><img src={`http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`} alt=''/></p>
                            <h6 id={panelModule.localDate}>{data.list[0].dt_txt}</h6>
                        </div>
                        <div className={panelModule.descrip}>
                            <h5 id={panelModule.cityName}>
                                <span >{data.city.name}</span>
                            </h5>
                            <h5 id={panelModule.localTime}></h5>
                        </div>
                        <div className={panelModule.temp} >
                            <div className={panelModule.row}>
                                <i className={panelModule.wi} id={panelModule.main_icon} ></i>
                                <div>
                                    <span id={panelModule.mainTemperature}>{data.list[0].main.temp}°C</span>
                                </div>
                            </div>
                        </div>
                        <div className={panelModule.humWid}>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Humidity: <span id={panelModule.humidity}>{data.list[0].main.humidity}</span>%</h6>
                            </div>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Description: <span id={panelModule.wind}></span>{data.list[0].weather[0].main}</h6>
                            </div>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>High: <span id={panelModule.mainTempHot}></span>{data.list[0].main.temp_max}°</h6>
                            </div>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Low: <span id={panelModule.mainTempLow}></span>{data.list[0].main.temp_min}°</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- card --> */}
        </div>
    )
}

export default Panel