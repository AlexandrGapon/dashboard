import React from 'react'
import MyButton from './UI/MyButton/MyButton'

const EmptySearchResult = ({ resetQuery }) => {
    return (
        <div className='emptyResult'>
            <h2>Your search did not match any results.</h2>
            <MyButton handleClick={resetQuery}>reset</MyButton>
        </div>
    )
}

export default EmptySearchResult