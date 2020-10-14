import React from 'react';
import panelModule from './panel.module.css'

const Panel = ({data}) => {
    return(
        <div>
            <div className={panelModule.container} id={panelModule.wrapper}>
                <div className={panelModule.container_fluid} id={panelModule.current_weather}>
                    <div className={panelModule.row}>
                        <div className={panelModule.head}>
                        <p id={panelModule.tempDescription}>iconeTemp</p>
                            <h6 id={panelModule.localDate}> DATA</h6>
                        </div>
                        <div className={panelModule.descrip}>
                            <h5 id={panelModule.cityName}>
                                <span >City Name</span>
                            </h5>
                            <h5 id={panelModule.localTime}> TIME</h5>
                        </div>
                        <div className={panelModule.temp} >
                            <div className={panelModule.row}>
                                <i className={panelModule.wi} id={panelModule.main_icon} ></i>
                                <div>
                                    <span id={panelModule.mainTemperature}>Temp°C</span>
                                </div>
                            </div>
                        </div>
                        <div className={panelModule.humWid}>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Humidity: <span id={panelModule.humidity}>54</span>%</h6>
                            </div>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Wind: <span id={panelModule.wind}>45</span> m/s</h6>
                            </div>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>High: <span id={panelModule.mainTempHot}></span>°</h6>
                            </div>
                            <div className={`${panelModule.col_md_12} ${panelModule.col_sm_3} ${panelModule.col_xs_3} ${panelModule.side_weather_info}`}>
                                <h6>Low: <span id={panelModule.mainTempLow}></span>°</h6>
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