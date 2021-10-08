import React from 'react'
import '../styles/SearchString.css'

const SearchString = ({ testsCount, handleChange, value }) => {
    return (
        <div className='searchString'>
            <input
                className='searchString__input'
                type="text"
                placeholder='What test are you looking for ?'
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
            <span className='searchString__result'>{testsCount === 1 ? `${testsCount} test` : `${testsCount} tests`}</span>
        </div>
    )
}

export default SearchString