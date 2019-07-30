import React from 'react'
import * as components from '../Components/components'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

export const routePaths = {
  'HOME': '/',
  'MAIN': '/main',
  'LOGIN': '/login'
}

const Views = ({ page }) => {
  const Component = components[page]
  return <div>
    <Component />
    <ToastContainer position="top-center"/>
  </div>
}

const mapStateToProps = ({ page }) => ({ page })
export default connect(mapStateToProps)(Views)