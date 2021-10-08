import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SearchString from '../components/SearchString'
import { useTests } from '../hooks/useTests'
import '../styles/DashboardPage.css'
import Dashboard from '../components/Dashboard'

const DashboardPage = () => {
    const [query, setQuery] = useState('')
    const tests = useSelector(state => state.tests.tests)
    const sites = useSelector(state => state.sites.sites)

    const statusMap = {
        ONLINE: 1,
        PAUSED: 2,
        STOPPED: 3,
        DRAFT: 4
    }


    let modTests = tests.map(test => {
        return {
            id: test.id,
            name: test.name,
            type: test.type,
            status: test.status,
            siteId: test.siteId,
            statusSort: statusMap[test.status],
            site: sites[test.siteId]
        }
    })

    const { sortedAndSearchedTests, requestSort, sortConfig, setSortConfig } = useTests({ tests: modTests, query })

    const getClassNameFor = (name) => {
        if (!sortConfig) {
            return
        }
        return sortConfig.key === name ? sortConfig.direction : undefined
    }

    const handleChangeQuery = (string) => {
        setQuery(string)
    }

    const resetQuery = () => {
        setQuery('')
        setSortConfig(null)
    }

    return (
        <div className='dashboard__page'>
            <h1>Dashboard</h1>
            <SearchString
                testsCount={sortedAndSearchedTests.length}
                handleChange={handleChangeQuery}
                value={query}
            />
            <Dashboard
                tests={sortedAndSearchedTests}
                requestSort={requestSort}
                getClassNameFor={getClassNameFor}
                resetQuery={resetQuery}
            />
        </div>
    )
}

export default DashboardPage