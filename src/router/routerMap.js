import React from "react";
import {
    HashRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import App from '../App'
import City from '../pages/City/index'
import Detail from '../pages/Detail/index'
import Home from '../pages/Home/index'
import Error404 from '../pages/Error/index'
import Search from '../pages/Search/index'
import User from '../pages/User/index'


const HashRouter = React.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="city" component={City} />
            <Route path="detail" component={Detail} />
            <Route path="home" component={Home} />
            <Route path="search" component={Search} />
            <Route path="user" component={User}>
                <Route path="/user/:userId" component={User} />
            </Route>
            <Route path="*" component={Error404} />
        </Route>
    </Router>,
    document.body
);

export default HashRouter