import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import 'antd/dist/antd.css'
import Core from './layouts/Core'

import './index.css'

const App = () => {
  const themes = {
    dark: 'antd.dark.css',
    light: 'antd.css'
  }
  return (
    <Provider store={store} >
        <ThemeSwitcherProvider defaultTheme='light' themeMap={themes}> 
            <Core />
        </ThemeSwitcherProvider>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
