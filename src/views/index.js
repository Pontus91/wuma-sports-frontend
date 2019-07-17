import React from 'react'
import * as components from '../Components/components'
import { connect } from 'react-redux'

export const routePaths = {
  'HOME': '/',
  'MAIN': '/main',
  'LOGIN': '/login'
}

const Views = ({ page }) => {
  const Component = components[page]
  return <Component />
}

const mapStateToProps = ({ page }) => ({ page })
export default connect(mapStateToProps)(Views)