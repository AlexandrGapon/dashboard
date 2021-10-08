import React from 'react'
import styles from '../styles/DashboardItem.css'
import MyButton from './UI/MyButton/MyButton'
import classNames from 'classnames/bind'
import { capitalizeFirstLetter } from '../utils/capitalizeString'
import { useHistory } from 'react-router-dom'

const DashboardItem = ({ testId, testName, testType, testStatus, siteId, site }) => {
    const router = useHistory()

    let cx = classNames.bind(styles)

    let className = cx({
        row__name: true,
        [`siteId${siteId}`]: true
    })

    let classStatus = cx({
        row__status: true,
        [`${testStatus.toLowerCase()}`] : true
    })

    const children = testStatus === 'DRAFT' ? 'finalize' : 'results'

    const handleClick = () => {
        router.push(`/${children}/${testId}`)
    }

    return (
        <tr className='table__row'>
            <td className={className}>{testName}</td>
            <td className='row__type'>{testType.length > 4 ? capitalizeFirstLetter(testType).replace('_', '-') : testType}</td>
            <td className={classStatus}>{capitalizeFirstLetter(testStatus)}</td>
            <td className='row__site'><a href={`http://${site}`}>{site}</a></td>
            <td className='row__button'><MyButton handleClick={handleClick}>{ children }</MyButton></td>
        </tr>
    )
}

export default DashboardItem