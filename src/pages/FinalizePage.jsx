import React from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/UI/BackButton/BackButton'
import '../styles/FinalizePage.css'

const FinalizePage = () => {
    return (
        <div className='finalizePage'>
            <div>
                <h1>Finalize</h1>
                <span>Spring promotion</span>
            </div>
            <Link to={'/'} className='link'><BackButton /></Link>
        </div>
    )
}

export default FinalizePage