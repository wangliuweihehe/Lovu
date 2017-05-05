import Home from '../components/home';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => (
{
  homeMenus: state.homeMenus
})
// Connected Component
export default connect(
    mapStateToProps
)(Home)