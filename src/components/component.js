import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <button type="submit" className="component-button DesktopButton">
        {props.button}
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  button: 'REGISTER YOUR INTEREST',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default AppComponent
