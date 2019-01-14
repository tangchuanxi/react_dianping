import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, NavLink  } from 'react-router-dom'
import {CITYNAME} from './config/localStorageKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import configureStore from './store/configureStore'

import * as userInfoActionsFromReducer from './reducers/actions/userinfo'
import './App.css';
// 加载组件
import City from './pages/City/index'
import Detail from './pages/Detail/index'
import Header from './components/header/index'
// 创建 Redux 的 store 对象
const store = configureStore()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '定位中...',
    }
  }
  
  render() {
    return (
        <BrowserRouter>
          <Header />
        </BrowserRouter>
    );
  }

  componentDidMount() {
    let cityName = localStorage.getItem(CITYNAME)?localStorage.getItem(CITYNAME): '未知城市'
    setTimeout(() => {
      
      // this.setState({
      //   cityName: cityName
      // })
      this.props.userInfoActions.update({
        cityName: cityName
      })
    }, 1000);
  }
}

function mapStateToProps(state) { //state
  return {

  }
}
function mapDispatchToProps(dispatch) { //action
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromReducer, dispatch)
  }
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(App);