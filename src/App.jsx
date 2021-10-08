import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, HashRouter } from 'react-router-dom'
import { useTests } from './hooks/useTests'
import DashboardPage from './pages/DashboardPage'
import FinalizePage from './pages/FinalizePage'
import ResultsPage from './pages/ResultsPage'
import { FETCH_TESTS } from './store/reducers/testsActions'

function App() {
  const dispatch = useDispatch()

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

  useEffect(() => {
    dispatch({ type: FETCH_TESTS })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Switch>
        <Route exact path='/'>
          <DashboardPage
            sortedAndSearchedTests={sortedAndSearchedTests}
            requestSort={requestSort}
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
            query={query}
            setQuery={setQuery}
          />
        </Route>
        <Route exact path='/results/:id'>
          <ResultsPage />
        </Route>
        <Route exact path='/finalize/:id'>
          <FinalizePage />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
