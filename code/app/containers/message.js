import Message from '../components/message';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => (
{
  message: state.message
})
// Connected Component
export default connect(
    mapStateToProps
)(Message)