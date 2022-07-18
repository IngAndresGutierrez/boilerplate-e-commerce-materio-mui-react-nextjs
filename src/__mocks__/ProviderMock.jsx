/* import external modules */
import React from 'react'
import { createStore } from 'redux'
import { PropTypes } from 'prop-types'
import { Provider } from 'react-redux'

/* import internal modules */
import initialState from './initialState'
import rootReducer from '../store/slices/rootReducer'

const store = createStore(rootReducer, initialState)

const ProviderMock = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

ProviderMock.propTypes = {
  children: PropTypes.element,
}

export default ProviderMock
