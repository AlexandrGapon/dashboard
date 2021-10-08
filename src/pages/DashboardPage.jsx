import React from 'react'
import SearchString from '../components/SearchString'
import '../styles/DashboardPage.css'
import Dashboard from '../components/Dashboard'

const DashboardPage = ({ sortedAndSearchedTests, requestSort, sortConfig, setSortConfig, query, setQuery }) => {

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