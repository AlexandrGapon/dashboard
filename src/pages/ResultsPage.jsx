import React from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/UI/BackButton/BackButton'
import '../styles/ResultsPage.css'

const ResultsPage = () => {
    return (
        <div className='resultsPage'>
            <div>
                <h1>Results</h1>
                <span>Order basket redesign</span>
            </div>
            <Link to={'/'} className='link'><BackButton /></Link>
        </div>
    )
}

export default ResultsPage