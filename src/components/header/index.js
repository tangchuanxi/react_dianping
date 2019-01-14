import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less'

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Header extends Component {
    render() {
        return (
            <div className='box'>
                <div>
                    深圳
                </div>
                <input type="text"/>
                <div>
                    用户中心
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Header);