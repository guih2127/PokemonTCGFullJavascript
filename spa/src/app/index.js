import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'
import { CardList } from '../pages'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/cards/list" exact component={CardList} />
            </Switch>
        </Router>
    )
}

export default App