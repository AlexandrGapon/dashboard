import React from 'react'
import DashboardItem from './DashboardItem'
import { useSelector } from 'react-redux'
import '../styles/Dashboard.css'
import EmptySearchResult from './EmptySearchResult'
import Loader from './UI/Loader/Loader'
import LoadError from './LoadError'

const Dashboard = ({ tests, requestSort, getClassNameFor, resetQuery }) => {
    const isLoading = useSelector( state => state.tests.isLoading )
    const loadError = useSelector( state => state.tests.error )

    if (isLoading) {
        return <Loader />
    }

    if (loadError) {
        return <LoadError />
    }

    if (tests.length === 0) {
        return <EmptySearchResult resetQuery={resetQuery} />
    }


    return (
        <div className='dashboard'>
        <table>
            <thead>
            <tr>
                <th><span onClick={() => requestSort('name')} className={getClassNameFor('name')}>name</span></th>
                <th><span onClick={() => requestSort('type')} className={getClassNameFor('type')}>type</span></th>
                <th><span onClick={() => requestSort('statusSort')} className={getClassNameFor('statusSort')}>status</span></th>
                <th><span onClick={() => requestSort('site')} className={getClassNameFor('site')}>site</span></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                tests.map( test => 
                    <DashboardItem
                        key={test.id}
                        testId={test.id}
                        testName={test.name}
                        testType={test.type}
                        testStatus={test.status}
                        siteId={test.siteId}
                        site={test.site}
                    />
                )
            }
            </tbody>
        </table>
    </div>
    )
}

export default Dashboard