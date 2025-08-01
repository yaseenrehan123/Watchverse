import React from 'react'
import LoadGenresStore from '../loaders/loadGenresStore'
import LoadCountriesStore from '../loaders/LoadCountriesStore'

const Loaders = () => {
    return (
        <div>
            <LoadGenresStore />
            <LoadCountriesStore />
        </div>
    )
}

export default Loaders