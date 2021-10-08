import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import FinalizePage from './pages/FinalizePage'
import ResultsPage from './pages/ResultsPage'
import { FETCH_TESTS } from './store/reducers/testsActions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: FETCH_TESTS })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <DashboardPage />
        </Route>
        <Route exact path='/results/:id'>
          <ResultsPage />
        </Route>
        <Route exact path='/finalize/:id'>
          <FinalizePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
