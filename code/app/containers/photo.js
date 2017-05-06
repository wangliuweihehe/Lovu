import Photo from '../components/photo';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => (
{
  albums: state.photo.albums
})
// Connected Component
export default connect(
    mapStateToProps
)(Photo)