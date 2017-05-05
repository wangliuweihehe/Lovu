import Startup from '../components/startup';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => (
{
  title: state.startUp.title,
  instructions: state.startUp.instructions,
  delayTime: state.startUp.delayTime,
  redirect :state.startUp.redirect
})
// Connected Component
export default connect(
    mapStateToProps
)(Startup)