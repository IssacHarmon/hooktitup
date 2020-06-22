import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import User from './Users'
import UserID from './UserID';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Link to='/'><button>Home</button></Link>
                <Switch>
                    <Route exact path='/' component={User} />

                    <Route path='/:id/details' component={UserID} />
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App;