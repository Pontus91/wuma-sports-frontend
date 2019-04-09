import React from 'react';
import StartPage from './Components/StartPage';
import { connect } from 'react-redux';

const App = props => <StartPage />;

const mapStateToProps = state => ({
  //
})

const mapDispatchToProps = dispatch => ({
  //
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
