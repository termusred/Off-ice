import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"

import _vite_plugin_require_transform_ from "./containers"
const routes = _vite_plugin_require_transform_()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App routes={routes}/>
    </BrowserRouter>
  </React.StrictMode>,
)
