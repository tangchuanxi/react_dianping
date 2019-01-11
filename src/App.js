import React, { Component } from 'react';
import { BrowserRouter as Router,Route ,Link} from 'react-router-dom'

import './App.css';
// 加载组件
import City from './pages/City/index'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>App</h1>
          <ul>
            <li><Link to="/city">City</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr/>
          <Route path="/city" component={City} />
        </div>
      </Router>
    );
  }
}
export default App;