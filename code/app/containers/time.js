import Time from '../components/time';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => (
{
  date: state.time.date,
  title:state.time.title
})
// Connected Component
export default connect(
    mapStateToProps
)(Time)