import Photo from '../components/photo';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => (
{
  photo: state.photo
})
// Connected Component
export default connect(
    mapStateToProps
)(Photo)