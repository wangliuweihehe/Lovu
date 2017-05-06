import Anniversary from '../components/anniversary';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => (
{
  anniversary: state.anniversary
})
// Connected Component
export default connect(
    mapStateToProps
)(Anniversary)