/* eslint-disable no-undef */
/* import external modules */
import PropTypes from 'prop-types'
import { Router } from 'next/router'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { CacheProvider } from '@emotion/react'
import { PersistGate } from 'redux-persist/integration/react'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

/* import internal modules */
import '../src/styles/globals.css'
import { store } from '../src/store/store'
import themeConfig from '../src/commons/theme/themeConfig'
import ThemeComponent from '../src/commons/theme/ThemeComponent'
import { createEmotionCache } from '../src/commons/utils/create-emotion-cache'

/** @description This is a functional app component
 *  @version 1.0.0
 *  @since 14/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name MyApp
 *  @returns {Component} Returns the app component
 **/

const persistor = persistStore(store)

const initialSettings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeComponent settings={initialSettings}>
            {<Component {...pageProps} />}
          </ThemeComponent>
        </PersistGate>
      </Provider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.element,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object
}

export default MyApp
