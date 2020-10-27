import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Panel from '../Panel/panel';
import Cards from '../Cards/cards'
import { fetchData } from '../../fetching'
import Modal from '../Modal/modal'

const List = () => {

    const [countryName, setcountryName] = useState(null)
    const [data, setData] = useState(null)
    const [modal, setModal] = useState(false)
    const [day, setDay] = useState(null)
    console.log(day,modal)

    useEffect(() => {
        fetchData(countryName, setData)
    }, [countryName])

    return (
        <div>
            <Header
                setcountryName={setcountryName}
            />

            {
                data && <Panel
                    data={data}
                />
            }


            {
                data && <Cards
                    data={data.list}
                    setModal={setModal}
                    setDay={setDay}
                    modal={modal}
                />
            }


            {
                modal && <Modal
                    data={data.list}
                    day={day}
                    setModal = {setModal}
                    setDay = {setDay}
                />

            }

        </div>
    )
}

export default List